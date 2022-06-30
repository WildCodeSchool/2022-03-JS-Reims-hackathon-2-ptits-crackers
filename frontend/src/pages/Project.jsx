/* eslint-disable no-return-assign */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import papa from "papaparse";

export default function Project() {
  const [projects, setProjects] = useState([]);
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
    <>
      <h1 className="text-3xl font-bold underline">Hello les projets</h1>
      <p>
        Voir <Link to="/">Home</Link>
      </p>
      <p>
        Voir <Link to="/user">Users</Link>
      </p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <Link to={`/project/${project.name}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
