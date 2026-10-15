export const InfoForm = ({ formFilled, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="containerForm">
        <fieldset>
          <legend>PV Modules</legend>
          <label>
            PV Module Model
            <input
              name="modulesModel"
              type="text"
              maxLength={25}
              value={formFilled.modulesModel}
              onChange={onChange}
            />
          </label>
          <label>
            Quantity
            <input
              name="modulesQty"
              type="number"
              value={formFilled.modulesQty}
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Inverter</legend>
          <label>
            Inverter Model
            <input
              name="inverter"
              type="text"
              maxLength={25}
              value={formFilled.inverter}
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Battery</legend>
          <label>
            Battery Model
            <input
              name="battery"
              type="text"
              maxLength={25}
              value={formFilled.battery}
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend> Customer details</legend>
          <label>
            Name
            <input
              name="customerName"
              type="text"
              maxLength={25}
              value={formFilled.customerName}
              onChange={onChange}
            />
          </label>
          <label>
            Address
            <input
              name="customerAddress"
              type="text"
              maxLength={25}
              value={formFilled.customerAddress}
              onChange={onChange}
            />
          </label>
          <label>
            MPRN
            <input
              name="mprn"
              type="text"
              inputMode="numeric"
              maxLength={13}
              value={formFilled.mprn}
              onChange={onChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Installer</legend>
          <label>
            Installer
            <input
              name="installerName"
              type="text"
              maxLength={25}
              value={formFilled.installerName}
              onChange={onChange}
            />
          </label>
        </fieldset>
      </div>
      <button type="submit">Generate Drawing</button>
    </form>
  );
};
