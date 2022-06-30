import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Diary from "./pages/Diary";
import Project from "./pages/Project";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/project" element={<Project />} />
        <Route path="/agenda" element={<Diary />} />
      </Routes>
    </Router>
  );
}

export default App;
