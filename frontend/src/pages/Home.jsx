/* eslint-disable no-return-assign */
import { useState, useEffect } from "react";
import papa from "papaparse";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostIt from "../components/PostIt";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const project1 = projects.slice(0, 25);
  const project2 = projects.slice(25, 50);
  const project3 = projects.slice(50, 75);
  const project4 = projects.slice(75, 100);
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
    <div className="flex">
      <Navbar />
      <div className="flex flex-wrap tableau">
        <div className="w-1/4 collonestableau">
          <h1 className="text-center titles">Mes projets</h1>
          {project1.map((project) => (
            <PostIt projet={project} />
          ))}
        </div>
        <div className="w-1/4 collonestableau">
          <h1 className="text-center titles">Projets de mon agence</h1>
          {project2.map((project) => (
            <PostIt projet={project} />
          ))}
        </div>
        <div className="w-1/4 collonestableau">
          <h1 className="text-center titles">Mes favoris</h1>
          {project3.map((project) => (
            <PostIt projet={project} />
          ))}
        </div>
        <div className="w-1/4">
          <h1 className="text-center titles">Projets recommandés</h1>
          {project4.map((project) => (
            <PostIt projet={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
