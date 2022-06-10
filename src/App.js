import './App.css';
import Dashboard from './Dashboard';
import ProjectState from './context/Project/ProjectState';

function App() {
  return (
    <ProjectState>
      <Dashboard />
    </ProjectState>
  );
}

export default App;
