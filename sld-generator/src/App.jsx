import { useState } from 'react';
import './App.css';
import { splitStrings } from './helpers/splitStrings';
import { Display } from './components/Display';
import { InfoForm } from './components/InfoForm';

const emptyForm = { inverter: '', battery: '', modulesQty: '', inputsQty: '' };
function App() {
  const [form, setForm] = useState(emptyForm);
  const [systemConfig, setSystemConfig] = useState(null);

  const handleChange = (event) => {
    console.log(event.target.name, event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSystemConfig({
      strings: splitStrings(Number(form.modulesQty), Number(form.inputsQty)),
      inverter: form.inverter,
      battery: form.battery,
    });
    setForm(emptyForm);
  };

  return (
    <div>
      <h1>String planner</h1>
      <InfoForm
        onSubmit={handleSubmit}
        formFilled={form}
        onChange={handleChange}
      />
      {systemConfig && <Display systemConfig={systemConfig} />}
    </div>
  );
}

export default App;
