export const getProjects = () => {
  const saved = localStorage.getItem('projects');
  return saved ? JSON.parse(saved) : [];
};

export const saveProject = (newProject) => {
  const projects = getProjects();
  if (!newProject.id) {
    const id = Date.now();
    newProject = { ...newProject, id: id };
    projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(projects));
  } else {
    const savedNewListOfProjects = projects.map((project) => {
      if (project.id === newProject.id) {
        return newProject;
      }
      return project;
    });
    localStorage.setItem('projects', JSON.stringify(savedNewListOfProjects));
  }
};
