import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      {' '}
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/project">Project</Link>
    </header>
  );
};
