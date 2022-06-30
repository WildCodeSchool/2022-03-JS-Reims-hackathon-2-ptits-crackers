import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello les crackers</h1>
      <p>
        Voir <Link to="/user">users</Link>
      </p>
      <p>
        Voir <Link to="/project">projets</Link>
      </p>
    </>
  );
}
