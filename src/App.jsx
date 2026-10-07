import { Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { ProjectPage } from './pages/ProjectPage';
import { Header } from './pages/Header';
import { Footer } from './pages/Footer';
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
