export const Display = ({ systemConfig }) => {
  return (
    <div>
      <h3>PV Module</h3>
      <p>Model: {systemConfig.modulesModel}</p>
      <p>
        Modules quantity:{' '}
        {systemConfig.strings.reduce((prev, curr) => prev + curr, 0)}
      </p>
      <h3> String Configuration </h3>
      Total: {systemConfig.strings.length}
      {systemConfig.strings.map((panels, i) => (
        <p key={i}>
          String {i + 1}: {panels} modules
        </p>
      ))}
      {systemConfig.inverter && (
        <>
          <h3>Inverter:</h3>
          <p> {systemConfig.inverter}</p>
        </>
      )}
      {systemConfig.battery && (
        <>
          <h3>Battery:</h3>
          <p> {systemConfig.battery}</p>
        </>
      )}
      {systemConfig.customerName && (
        <>
          <h3>Customer:</h3>
          <p> {systemConfig.customerName}</p>
        </>
      )}
      {systemConfig.customerAddress && (
        <>
          <h3>Customer address:</h3>
          <p> {systemConfig.customerAddress}</p>
        </>
      )}
      {systemConfig.mprn && (
        <>
          <h3>MPRN:</h3>
          <p> {systemConfig.MPRN}</p>
        </>
      )}
      {systemConfig.installerName && (
        <>
          <h3>installer:</h3>
          <p> {systemConfig.installerName}</p>
        </>
      )}
    </div>
  );
};
