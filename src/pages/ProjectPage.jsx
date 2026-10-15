import { useState } from 'react';
import { splitStrings } from '../helpers/splitStrings';
import { InfoForm } from '../components/InfoForm';
import { Sldpreview } from '../components/Sldpreview';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getProjects, saveProject } from '../helpers/projectStorage';

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
  const navigate = useNavigate();
  const { id } = useParams();
  const foundProject = getProjects().find(
    (project) => project.id === Number(id)
  );

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

  const handleSave = () => {
    saveProject(systemConfig);
    navigate('/dashboard');
  };

  return (
    <div>
      <InfoForm
        onSubmit={handleSubmit}
        formFilled={form}
        onChange={handleChange}
      />

      {systemConfig && (
        <Sldpreview systemConfig={systemConfig} onSave={handleSave} />
      )}
    </div>
  );
}
