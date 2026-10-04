export const Display = ({ systemConfig }) => {
  return (
    <div>
      <h3>
        Modules quantity:{' '}
        {systemConfig.strings.reduce((prev, curr) => prev + curr, 0)} | String
        quantity: {systemConfig.strings.length}
      </h3>
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
