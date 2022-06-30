/* eslint-disable no-return-assign */
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostIt from "../components/PostIt";

// import { useState, useEffect } from "react";
// import papa from "papaparse";

export default function Home() {
  // const [projects, setProjects] = useState([]);
  // const project1 = projects.slice(0, 50);
  // const project2 = projects.slice(50, 75);
  // const project3 = projects.slice(75, 100);
  // const prepareDataForProjects = (data) => {
  //   const keys = data.shift();
  //   const json = data.map((line) => {
  //     let obj = {};
  //     keys.forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
  //     return obj;
  //   });
  //   setProjects(json);
  // };
  // useEffect(() => {
  //   fetch(
  //     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTJFoLYd8jMgvGGuzvEiImpdicxdD11yBGcB8FkyD59qD9U3vUERCNLxRzTnXO8R0Xxu5cmoavr6DR4/pub?output=csv"
  //   )
  //     .then((res) => res.text())
  //     .then((text) => papa.parse(text))
  //     .then((data) => prepareDataForProjects(data.data));
  // }, []);
  return (
    <>
      <main className="flex flex-wrap">
        <Navbar />
        <PostIt />
      </main>
      <h1 className="text-3xl font-bold underline">Hello les projets</h1>
      <p>
        Voir <Link to="/project">Projet</Link>
      </p>
      <p>
        Voir <Link to="/user">Users</Link>
      </p>
      <div className="flex flex-wrap tableau">
        <div className="w-1/4">
          <h1 className="text-center titles">Projets en cours</h1>
        </div>
        <div className="w-1/4">
          <h1 className="text-center titles">Projets en recommandés</h1>
        </div>
        <div className="w-1/4">
          <h1 className="text-center titles">Projets favoris</h1>
        </div>
        <div className="w-1/4">
          <h1 className="text-center titles">Projets de mon agence</h1>
        </div>
      </div>
    </>
  );

  //   <div className="allimg grid grid-cols-3">
  //     <ul className="colstart flex flex-col gap-3 px-3">
  //       {project1.map((project) => (
  //         <li key={project.id}>
  //           <img
  //             className="w-96 h-32"
  //             src={project.image_projet}
  //             alt={project.name}
  //           />
  //           <p className="text-center">{project.name}</p>
  //         </li>
  //       ))}
  //     </ul>
  //     <ul className="colcenter flex flex-col gap-3 px-3">
  //       {project2.map((project) => (
  //         <li className="w-[80%]" key={project.id}>
  //           <img
  //             className="w-[100%] h-96"
  //             src={project.image_projet}
  //             alt={project.name}
  //           />
  //           <p className="text-center">{project.name}</p>
  //         </li>
  //       ))}
  //     </ul>
  //     <ul className="colend flex flex-col gap-3 px-3">
  //       {project3.map((project) => (
  //         <li className="w-[80%]" key={project.id}>
  //           <img
  //             className="w-[100%] h-64"
  //             src={project.image_projet}
  //             alt={project.name}
  //           />
  //           <p className="text-center">{project.name}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // </>
}
