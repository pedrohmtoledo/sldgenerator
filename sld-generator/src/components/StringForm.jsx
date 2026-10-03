export const StringForm = ({
  modules,
  inputs,
  onSubmit,
  onModulesChange,
  onInputsChange,
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
        type="number"
        value={inputs}
        placeholder="How many inputs inverter has"
        onChange={onInputsChange}
      />
      <button type="submit">save</button>
    </form>
  );
};
