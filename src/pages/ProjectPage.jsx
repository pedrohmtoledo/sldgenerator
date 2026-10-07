import { useState } from 'react';
import { splitStrings } from '../helpers/splitStrings';
import { Display } from '../components/Display';
import { InfoForm } from '../components/InfoForm';
import { Sldpreview } from '../components/Sldpreview';

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
export function ProjectPage() {
  const [form, setForm] = useState(emptyForm);
  const [systemConfig, setSystemConfig] = useState(null);
  const [showDrawing, setShowDrawing] = useState(false);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSystemConfig({
      ...form,
      strings: splitStrings(Number(form.modulesQty), 2),
    });
    setShowDrawing(false);
  };
  const handleGenerate = () => {
    setShowDrawing(true);
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
      {systemConfig && (
        <>
          <Display systemConfig={systemConfig} />
          <button onClick={handleGenerate}> Generate Drawing </button>
        </>
      )}
      {showDrawing && <Sldpreview systemConfig={systemConfig} />}
    </div>
  );
}
