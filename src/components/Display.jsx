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
    </div>
  );
};
