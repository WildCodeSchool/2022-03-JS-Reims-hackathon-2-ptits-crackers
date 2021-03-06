import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Project from "./pages/Project";
import Pellenc from "./components/Pellenc";
import MyProjects from "./pages/MyProjects";
import MyAgence from "./pages/MyAgence";
import Agenda from "./components/Agenda";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/myagency" element={<MyAgence />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/Pellenc" element={<Pellenc />} />
        <Route path="/myprojects" element={<MyProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
