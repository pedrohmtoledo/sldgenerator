import template1i2str from '../templates/sld-1-inv-2-string-v01.svg?raw';

export const Sldpreview = ({ systemConfig }) => {
  const preview = template1i2str
    .replaceAll('INVERTER', systemConfig.inverter.toUpperCase())
    .replaceAll('{{BATTERY}}', systemConfig.battery.toUpperCase())
    .replaceAll('STRING_1', systemConfig.strings[0])
    .replaceAll('STRING_2', systemConfig.strings[1])
    .replaceAll('PV_MODULES', systemConfig.modulesModel.toUpperCase())
    .replaceAll(
      'MODULES_QTY',
      systemConfig.strings.reduce((prev, curr) => prev + curr, 0)
    )
    .replaceAll('CUSTOMER_NAME', systemConfig.customerName.toUpperCase())
    .replaceAll('CUSTOMER_ADDRESS', systemConfig.customerAddress.toUpperCase())
    .replaceAll('INSTALLER_NAME', systemConfig.installerName.toUpperCase())
    .replaceAll('{{DATE}}', new Date().toLocaleDateString('en-IE'));

  return (
    <img
      src={'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(preview)}
    />
  );
};
