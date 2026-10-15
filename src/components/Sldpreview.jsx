import template1i2str from '../templates/sld-1-inv-2-string-v01.svg?raw';
import { jsPDF } from 'jspdf';
import 'svg2pdf.js';
import { escapeXml } from '../helpers/escapeXml';

export const Sldpreview = ({ systemConfig, onSave }) => {
  const preview = template1i2str
    .replaceAll('{{INVERTER}}', escapeXml(systemConfig.inverter.toUpperCase()))
    .replaceAll('{{BATTERY}}', escapeXml(systemConfig.battery.toUpperCase()))
    .replaceAll('{{STRING_1}}', systemConfig.strings[0])
    .replaceAll('{{STRING_2}}', systemConfig.strings[1])
    .replaceAll(
      '{{PV_MODULES}}',
      escapeXml(systemConfig.modulesModel.toUpperCase())
    )
    .replaceAll(
      '{{MODULES_QTY}}',
      systemConfig.strings.reduce((prev, curr) => prev + curr, 0)
    )
    .replaceAll(
      '{{CUSTOMER_NAME}}',
      escapeXml(systemConfig.customerName.toUpperCase())
    )
    .replaceAll(
      '{{CUSTOMER_ADDRESS}}',
      escapeXml(systemConfig.customerAddress.toUpperCase())
    )
    .replaceAll('{{MPRN}}', `MPRN:${systemConfig.mprn}`)
    .replaceAll(
      '{{INSTALLER_NAME}}',
      escapeXml(systemConfig.installerName.toUpperCase())
    )
    .replaceAll('{{DATE}}', new Date().toLocaleDateString('en-IE'));
  const sldUrl =
    'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(preview);
  const downloadPdf = async () => {
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a3',
    });
    const svgElement = new DOMParser().parseFromString(
      preview,
      'image/svg+xml'
    ).documentElement;
    await doc.svg(svgElement, { x: 0, y: 0, width: 420, height: 297 });
    const fileName = (systemConfig.customerName || 'drawing')
      .toUpperCase()
      .replaceAll(' ', '-');
    doc.save(`SLD-${fileName}.pdf`);
  };
  return (
    <>
      <img src={sldUrl} alt="Single line diagram" className="sldPreview" />
      <button onClick={downloadPdf}>Download PDF</button>
      <button onClick={onSave}>Save</button>
    </>
  );
};
