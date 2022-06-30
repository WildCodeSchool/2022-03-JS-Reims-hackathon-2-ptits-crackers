import "./PostIt.css";

export default function Project() {
  return (
    <section className="flex flex-wrap max-w-[70%] justify-center">
      <div className="postit">
        <article>
          <h3>EVOLION 3 SAFT</h3>
          <p className="italic">
            Ingénierie industrielle,
            <br />
            agence de Bordeaux.
          </p>
          <p>
            Saft Batteries a décidé de rénover son système Evolion, contraction
            de « evolution » et « Li-ion », avec une troisième génération plus
            performante, plus sûre et plus maintenable.
          </p>
        </article>
      </div>
    </section>
  );
}
