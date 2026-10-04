import template1i2str from '../templates/sld-1-inv-2-string.svg?raw';

export const Sldpreview = ({ systemConfig }) => {
  const preview = template1i2str
    .replaceAll('INVERTER', systemConfig.inverter)
    .replaceAll('BATTERY', systemConfig.battery)
    .replaceAll('STRING_1', systemConfig.strings[0])
    .replaceAll('STRING_2', systemConfig.strings[1])
    .replaceAll('PV_MODULES', systemConfig.modulesModel)
    .replaceAll(
      'MODULES_QTY',
      systemConfig.strings.reduce((prev, curr) => prev + curr, 0)
    );

  return (
    <img
      src={'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(preview)}
    />
  );
};
