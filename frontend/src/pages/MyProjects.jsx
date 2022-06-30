/* eslint-disable no-return-assign */
import { useState, useEffect } from "react";
import papa from "papaparse";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostIt from "../components/PostIt";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const project1 = projects.slice(0, 7);
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
      <div className="grid grid-cols-4 tableau">
        <h1 className="col-start-1 col-end-5 text-center title">Mes projets</h1>
        {project1.map((project) => (
          <PostIt projet={project} myprojet={false} />
        ))}
      </div>
    </div>
  );
}
