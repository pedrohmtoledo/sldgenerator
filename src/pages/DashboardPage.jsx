import {
  ProjectTableHeader,
  ProjectTableRow,
} from '../components/DashboardTable';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export const DashboardPage = () => {
  return (
    <div>
      <Link to="/project" className="startProjectButton">
        Start a new Single Line Diagram
      </Link>
      <table>
        <thead>
          <ProjectTableHeader list={projects} />
        </thead>
        <tbody>
          {projects.map((project) => (
            <ProjectTableRow key={project.id} row={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
