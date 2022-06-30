import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Project from "./pages/Project";
import SolarBreeze from "./components/SolarBreeze";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/Solarbreeze" element={<SolarBreeze />} />
      </Routes>
    </Router>
  );
}

export default App;
