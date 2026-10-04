import { useState } from 'react';
import './App.css';
import { splitStrings } from './helpers/splitStrings';
import { Display } from './components/Display';
import { InfoForm } from './components/InfoForm';
import template1i2str from './templates/sld-1-inv-2-string.svg?raw';

const filled = template1i2str.replaceAll('INVERTER', 'SOLIS');
console.log(filled.includes('SUN2000-5KTL-L1'));
const emptyForm = {
  inverter: '',
  battery: '',
  modulesQty: '',
  inputsQty: '',
  modulesModel: '',
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
      strings: splitStrings(Number(form.modulesQty), Number(form.inputsQty)),
      inverter: form.inverter,
      battery: form.battery,
      modulesModel: form.modulesModel,
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
      <img
        src={'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(filled)}
      />
    </div>
  );
}

export default App;
