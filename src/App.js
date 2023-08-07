import logo from './logo.svg';
import './App.scss';
import Nav from './components/nav/Nav';
import Projects from './components/projects/Projects';
import Cv from './components/cv/Cv';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Nav />
      
      <Router>
        <Routes>
          <Route index path="projects" element={<Projects />} />
          <Route path="curriculum" element={<Cv />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
