import { Link } from "react-router-dom";

export default function User() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello les users</h1>
      <p>
        Voir <Link to="/">Home</Link>
      </p>
      <p>
        Voir <Link to="/project">Projet</Link>
      </p>
    </>
  );
}
