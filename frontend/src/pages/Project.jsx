import { Link } from "react-router-dom";

export default function Project() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello les crackers</h1>
      <p>
        Voir <Link to="/user">users</Link>
      </p>
      <p>
        Voir <Link to="/">Home</Link>
      </p>
    </>
  );
}
