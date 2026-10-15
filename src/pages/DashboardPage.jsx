import {
  ProjectTableHeader,
  ProjectTableRow,
} from '../components/DashboardTable';
import { Link } from 'react-router-dom';
//import { projects } from '../data/projects';
import { getProjects } from '../helpers/projectStorage';

export const DashboardPage = () => {
  const projects = getProjects();

  return (
    <div>
      <Link to="/project" className="startProjectButton">
        Start a new Single Line Diagram
      </Link>
      {projects.length === 0 ? (
        <p>No projets yet</p>
      ) : (
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
      )}
    </div>
  );
};
