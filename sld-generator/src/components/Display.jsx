export const Display = ({ strings }) => {
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
    </div>
  );
};
