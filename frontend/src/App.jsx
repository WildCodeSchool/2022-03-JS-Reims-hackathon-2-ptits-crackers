/* eslint-disable no-return-assign */
import { useEffect, useState } from "react";
import papa from "papaparse";
import Home from "./pages/Home";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  const prepareDataForUsers = (data) => {
    const keys = data.shift();
    const json = data.map((line) => {
      let obj = {};
      keys.forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
      return obj;
    });
    setUsers(json);
  };
  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQY3Rio8jsE6Z3EQYlbtIBZmP8EiE7w3MqUlveAmHicNSWUmOi1MqvS4EJG9DmQmvpfku4JXBKwwbkP/pub?output=csv"
    )
      .then((res) => res.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareDataForUsers(data.data));
  }, []);

  const prepareDataForProjects = (data) => {
    const keys = data.shift();
    const json = data.map((line) => {
      let obj = {};
      keys.forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
      return obj;
    });
    setProjects(json);
  };
  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJFoLYd8jMgvGGuzvEiImpdicxdD11yBGcB8FkyD59qD9U3vUERCNLxRzTnXO8R0Xxu5cmoavr6DR4/pub?output=csv"
    )
      .then((res) => res.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareDataForProjects(data.data));
  }, []);

  return (
    <div className="App">
      <Home />
      <h1 className="border-4">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h1>{user.first_name}</h1>
          </li>
        ))}
      </ul>
      <h1 className="border-4">Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h1>{project.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
