export const Display = ({ strings, inverter, battery }) => {
  return (
    <div>
      <h3>
        Modules quantity: {strings.reduce((prev, curr) => prev + curr, 0)} |
        String quantity: {strings.length}
      </h3>
      {strings.map((panels, i) => (
        <p key={i}>
          String {i + 1}: {panels} modules
        </p>
      ))}
      <h3>Inverter:</h3>
      <p> {inverter}</p>
      <h3>Battery:</h3>
      <p> {battery}</p>
    </div>
  );
};
