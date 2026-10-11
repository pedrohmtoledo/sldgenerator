import { CreateTableHeader } from '../components/DashboardTable';
import { CreateTableRows } from '../components/DashboardTable';
import { Link } from 'react-router-dom';
import { projects } from '../assets/projects';

export const DashboardPage = () => {
  return (
    <div>
      <Link to="/project" className="startProjectButton">
        Start a new Single Line Diagram
      </Link>
      <table>
        <thead>
          <CreateTableHeader list={projects} />
        </thead>
        <tbody>
          {projects.map((project) => (
            <CreateTableRows key={project.id} row={project} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
