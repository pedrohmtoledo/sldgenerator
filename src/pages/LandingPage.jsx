import { Link } from 'react-router-dom';
import exampleSld from '../assets/example.svg';

export const LandingPage = () => {
  return (
    <div>
      <h1>SLD Generator</h1>
      <p>Generate single line diagrams for solar PV installations.</p>
      <Link to="/project" className="startProjectButton">
        Start a new Single Line Diagram
      </Link>
      <img src={exampleSld} className="exampleSld" />
    </div>
  );
};
