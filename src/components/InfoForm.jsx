export const InfoForm = ({ formFilled, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        name="modulesQty"
        type="number"
        value={formFilled.modulesQty}
        placeholder="Number of modules"
        onChange={onChange}
      />
      <input
        name="inverter"
        type="text"
        value={formFilled.inverter}
        placeholder="Inverter"
        onChange={onChange}
      />
      <input
        name="battery"
        type="text"
        value={formFilled.battery}
        placeholder="Battery"
        onChange={onChange}
      />
      <input
        name="inputsQty"
        type="number"
        value={formFilled.inputsQty}
        placeholder="How many inputs inverter has"
        onChange={onChange}
      />
      <button type="submit">save</button>
    </form>
  );
};
