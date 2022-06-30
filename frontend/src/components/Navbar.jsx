import { Link } from "react-router-dom";
import whiteLogo from "../assets/images/apside-logo.png";

export default function Navbar() {
  return (
    <nav className="block min-w-[200px] h-screen bg-[#183650]">
      <div className="flex flex-col justify-evenly items-center">
        <p className="font-['Hind-Regular'] text-[1.5rem] font-medium pt-[2rem] text-slate-50 text-center">
          Bonjour !
        </p>
        <Link to="/user">
          <img
            src="https://robohash.org/quasiatet.png?size=100x100&set=set1"
            alt="user"
            className="rounded-full my-4"
          />
        </Link>
        <ul className="flex flex-col items-center">
          <li className="li-navbar">
            <Link to="/user">Mon profil</Link>
          </li>
          <li className="li-navbar">
            <Link to="/">Mon tableau</Link>
          </li>
          <li className="li-navbar">
            <Link to="/myagency">Mon agence</Link>
          </li>
          <li className="li-navbar">
            <Link to="/agenda">Mon agenda</Link>
          </li>
          <li className="li-navbar mb-20">
            <Link to="/myprojects">Mes projets</Link>
          </li>
        </ul>
        <img
          src={whiteLogo}
          alt="logo blanc"
          className="max-w-[75%] justify-self-end self-center mb-8"
        />
      </div>
    </nav>
  );
}
