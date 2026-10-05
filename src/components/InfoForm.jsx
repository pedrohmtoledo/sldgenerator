export const InfoForm = ({ formFilled, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
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
        <label>Name</label>
        <input
          name="customerName"
          type="text"
          maxLength={25}
          value={formFilled.customerName}
          onChange={onChange}
        />
        <label>Address</label>
        <input
          name="customerAddress"
          type="text"
          maxLength={25}
          value={formFilled.customerAddress}
          onChange={onChange}
        />
        <label>MPRN</label>
        <input
          name="mprn"
          type="number"
          value={formFilled.mprn}
          onChange={onChange}
        />
      </fieldset>
      <fieldset>
        <legend>Installer</legend>
        <label>Installer</label>
        <input
          name="installerName"
          type="text"
          maxLength={25}
          value={formFilled.installerName}
          onChange={onChange}
        />
      </fieldset>
      <button type="submit">Review</button>
    </form>
  );
};
