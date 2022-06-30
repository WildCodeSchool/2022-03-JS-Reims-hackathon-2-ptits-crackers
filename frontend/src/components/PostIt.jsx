/* eslint-disable react/prop-types */
import "./PostIt.css";

export default function Project({ projet }) {
  return (
    <section className="flex flex-wrap max-w-[100%] justify-center">
      <div className="postit">
        {projet && (
          <article>
            <h3>{projet.name}</h3>
            <p className="italic">
              {projet.categorie},
              <br />
              agence de {projet.agence}.
            </p>
            <p>{projet.description}</p>
          </article>
        )}
      </div>
    </section>
  );
}
