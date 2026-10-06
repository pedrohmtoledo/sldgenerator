import template1i2str from '../templates/sld-1-inv-2-string-v01.svg?raw';
import { jsPDF } from 'jspdf';
import 'svg2pdf.js';

export const Sldpreview = ({ systemConfig }) => {
  const preview = template1i2str
    .replaceAll('{{INVERTER}}', systemConfig.inverter.toUpperCase())
    .replaceAll('{{BATTERY}}', systemConfig.battery.toUpperCase())
    .replaceAll('{{STRING_1}}', systemConfig.strings[0])
    .replaceAll('{{STRING_2}}', systemConfig.strings[1])
    .replaceAll('{{PV_MODULES}}', systemConfig.modulesModel.toUpperCase())
    .replaceAll(
      '{{MODULES_QTY}}',
      systemConfig.strings.reduce((prev, curr) => prev + curr, 0)
    )
    .replaceAll('{{CUSTOMER_NAME}}', systemConfig.customerName.toUpperCase())
    .replaceAll(
      '{{CUSTOMER_ADDRESS}}',
      systemConfig.customerAddress.toUpperCase()
    )
    .replaceAll('{{MPRN}}', `MPRN:${systemConfig.mprn}`)
    .replaceAll('{{INSTALLER_NAME}}', systemConfig.installerName.toUpperCase())
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
    doc.save(`SLD_${systemConfig.customerName}.pdf`);
  };
  return (
    <>
      <img src={sldUrl} />
      <button onClick={downloadPdf}>Download PDF</button>
    </>
  );
};
