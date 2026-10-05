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
        maxLength={25}
        value={formFilled.modulesModel}
        placeholder="Pv module model"
        onChange={onChange}
      />
      <input
        name="inverter"
        type="text"
        maxLength={25}
        value={formFilled.inverter}
        placeholder="Inverter Model"
        onChange={onChange}
      />
      <input
        name="battery"
        type="text"
        maxLength={25}
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
      <input
        name="customerName"
        type="text"
        maxLength={25}
        value={formFilled.customerName}
        placeholder="Customer name"
        onChange={onChange}
      />
      <input
        name="customerAddress"
        type="text"
        maxLength={25}
        value={formFilled.customerAddress}
        placeholder="Customer address"
        onChange={onChange}
      />
      <input
        name="installerName"
        type="text"
        maxLength={25}
        value={formFilled.installerName}
        placeholder="Installer"
        onChange={onChange}
      />
      <button type="submit">save</button>
    </form>
  );
};
