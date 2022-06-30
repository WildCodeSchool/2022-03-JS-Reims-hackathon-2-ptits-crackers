import { useState, useEffect } from "react";
import papa from "papaparse";
import "./PostIt.css";

export default function Project() {
  const [projects, setProjects] = useState([]);
  const prepareDataForProjects = (data) => {
    const keys = data.shift();
    const json = data.map((line) => {
      let obj = {};
      // eslint-disable-next-line no-return-assign
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
    <section className="flex flex-wrap max-w-[70%] justify-center">
      {projects.map((project) => (
        <div className="postit">
          <article key={project.id}>
            <h3>{project.name}</h3>
            <p>
              {project.categorie}
              <br />
              Agence : {project.agence}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, architecto temporibus maiores alias et aspernatur
              assumenda, nobis suscipit.{" "}
            </p>
            <p>{project.agency}</p>
          </article>
        </div>
      ))}
    </section>
  );
}
