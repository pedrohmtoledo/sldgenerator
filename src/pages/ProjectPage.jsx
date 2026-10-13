import { useState } from 'react';
import { splitStrings } from '../helpers/splitStrings';
import { InfoForm } from '../components/InfoForm';
import { Sldpreview } from '../components/Sldpreview';
import { useParams, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';

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
  const { id } = useParams();
  const foundProject = projects.find((project) => project.id === Number(id));

  const [form, setForm] = useState(foundProject || emptyForm);
  const [systemConfig, setSystemConfig] = useState(null);

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
  };

  return (
    <div>
      <InfoForm
        onSubmit={handleSubmit}
        formFilled={form}
        onChange={handleChange}
      />

      {systemConfig && <Sldpreview systemConfig={systemConfig} />}
    </div>
  );
}
