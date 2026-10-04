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
        name="modulesModel"
        type="text"
        value={formFilled.modulesModel}
        placeholder="Pv module model"
        onChange={onChange}
      />
      <input
        name="inverter"
        type="text"
        value={formFilled.inverter}
        placeholder="Inverter Model"
        onChange={onChange}
      />
      <input
        name="battery"
        type="text"
        value={formFilled.battery}
        placeholder="Battery Battery"
        onChange={onChange}
      />
      <input
        name="inputsQty"
        type="number"
        value={formFilled.inputsQty}
        placeholder="Inputs quantity"
        onChange={onChange}
      />
      <button type="submit">save</button>
    </form>
  );
};
