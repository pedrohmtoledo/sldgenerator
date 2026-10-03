import { useState } from 'react';
import './App.css';
import { splitStrings } from './helpers/splitStrings';
import { Display } from './components/Display';
import { InfoForm } from './components/InfoForm';

function App() {
  const [newModules, setNewModules] = useState('');
  const [pvStrings, setPvStrings] = useState([]);
  const [inverterInputs, setInverterInputs] = useState('');
  const [newInverter, setNewInverter] = useState('');
  const [inverter, setInverter] = useState('');
  const [newBattery, setNewBattery] = useState('');
  const [battery, setBattery] = useState('');

  const handleModuleChange = (event) => {
    setNewModules(event.target.value);
  };

  const handleInverterInputsChange = (event) => {
    setInverterInputs(event.target.value);
  };
  const handleInverterChange = (event) => {
    setNewInverter(event.target.value);
  };
  const handleBatteryChange = (event) => {
    setNewBattery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setPvStrings(splitStrings(Number(newModules), Number(inverterInputs)));
    setInverter(newInverter);
    setBattery(newBattery);
    setNewModules('');
    setNewInverter('');
    setNewBattery('');
    setInverterInputs('');
  };
  return (
    <div>
      <h1>String planner</h1>
      <InfoForm
        onSubmit={handleSubmit}
        modules={newModules}
        onModulesChange={handleModuleChange}
        inputs={inverterInputs}
        onInputsChange={handleInverterInputsChange}
        inverter={newInverter}
        onInverterChange={handleInverterChange}
        battery={newBattery}
        onBatteryChange={handleBatteryChange}
      />
      {pvStrings.length > 0 && (
        <Display strings={pvStrings} inverter={inverter} battery={battery} />
      )}
    </div>
  );
}

export default App;
