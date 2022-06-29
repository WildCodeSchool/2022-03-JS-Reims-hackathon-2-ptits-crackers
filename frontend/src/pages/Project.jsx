import { Link } from "react-router-dom";

export default function Project() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello les projets</h1>
      <p>
        Voir <Link to="/">Home</Link>
      </p>
      <p>
        Voir <Link to="/user">Users</Link>
      </p>
    </>
  );
}
