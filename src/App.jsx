import { useState } from 'react';
import { splitStrings } from './helpers/splitStrings';
import { Display } from './components/Display';
import { InfoForm } from './components/InfoForm';
import { Sldpreview } from './components/Sldpreview';

const emptyForm = {
  inverter: '',
  battery: '',
  modulesQty: '',
  modulesModel: '',
  customerName: '',
  customerAddress: '',
  mprn: '',
  installerName: '',
};
function App() {
  const [form, setForm] = useState(emptyForm);
  const [systemConfig, setSystemConfig] = useState(null);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSystemConfig({
      ...form,
      strings: splitStrings(Number(form.modulesQty), 2),
    });
    setForm(emptyForm);
  };

  return (
    <div>
      <h1>SLD GENERATOR</h1>
      <InfoForm
        onSubmit={handleSubmit}
        formFilled={form}
        onChange={handleChange}
      />
      {systemConfig && <Display systemConfig={systemConfig} />}
      {systemConfig && <Sldpreview systemConfig={systemConfig} />}
    </div>
  );
}

export default App;
