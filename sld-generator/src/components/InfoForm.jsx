export const InfoForm = ({
  modules,
  inputs,
  onSubmit,
  onModulesChange,
  onInputsChange,
  inverter,
  onInverterChange,
  battery,
  onBatteryChange,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        value={modules}
        placeholder="Number of modules"
        onChange={onModulesChange}
      />
      <input
        type="text"
        value={inverter}
        placeholder="Inverter"
        onChange={onInverterChange}
      />
      <input
        type="text"
        value={battery}
        placeholder="Battery"
        onChange={onBatteryChange}
      />
      <input
        type="number"
        value={inputs}
        placeholder="How many inputs inverter has"
        onChange={onInputsChange}
      />
      <button type="submit">save</button>
    </form>
  );
};
