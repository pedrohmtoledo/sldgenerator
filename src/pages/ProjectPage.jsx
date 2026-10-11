import { useState } from 'react';
import { splitStrings } from '../helpers/splitStrings';
import { Display } from '../components/Display';
import { InfoForm } from '../components/InfoForm';
import { Sldpreview } from '../components/Sldpreview';
import { useParams } from 'react-router-dom';
import { projects } from '../assets/projects';
import { Navigate } from 'react-router-dom';

const emptyForm = {
  inverter: '',
  battery: '',
  modulesQty: '',
  modulesModel: '',
  strings: '',
  customerName: '',
  customerAddress: '',
  mprn: '',
  installerName: '',
};
export function ProjectPage() {
  const { id } = useParams();
  const foundProject = projects.find((project) => project.id === Number(id));

  const [form, setForm] = useState(foundProject || emptyForm);
  const [systemConfig, setSystemConfig] = useState(null);
  const [showDrawing, setShowDrawing] = useState(false);

  if (id && !foundProject) {
    return <Navigate to="/notFound" replace />;
  }
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
