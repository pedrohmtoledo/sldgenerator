import {
  ProjectTableHeader,
  ProjectTableRow,
} from '../components/DashboardTable';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { deleteProject, getProjects } from '../helpers/projectStorage';

export const DashboardPage = () => {
  const [projects, setProjects] = useState(getProjects);
  const handleDelete = (id) => {
    deleteProject(id);
    setProjects(getProjects());
  };

  return (
    <div>
      <Link to="/project" className="startProjectButton">
        Start a new Single Line Diagram
      </Link>
      {projects.length === 0 ? (
        <p>No projects yet</p>
      ) : (
        <table>
          <thead>
            <ProjectTableHeader />
          </thead>
          <tbody>
            {projects.map((project) => (
              <ProjectTableRow
                key={project.id}
                row={project}
                onDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
