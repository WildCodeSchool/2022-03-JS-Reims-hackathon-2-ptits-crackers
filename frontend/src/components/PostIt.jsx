/* eslint-disable react/prop-types */
import "./PostIt.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Project({ projet, move, myprojet }) {
  const [isDragged, setIsDragged] = useState(false);
  const handleChange = () => {
    setIsDragged(!isDragged);
  };

  return (
    <section className="flex flex-wrap max-w-[100%] justify-center">
      <div
        className={`postit ${
          isDragged && move === "right"
            ? "postitmove"
            : isDragged && move === "left" && "postitmove2"
        }`}
      >
        {projet && (
          <article>
            <h3>{projet.name}</h3>
            <p className="italic">
              {projet.categorie},
              <br />
              agence de {projet.agence}.
            </p>
            <Link to={`/project/${projet.name}`}>
              <p>{projet.description}</p>
            </Link>
            {myprojet !== false && (
              <button type="button" onClick={handleChange}>
                Ajouter aux favoris
              </button>
            )}
          </article>
        )}
      </div>
    </section>
  );
}
