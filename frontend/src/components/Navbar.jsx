import { Link } from "react-router-dom";
import whiteLogo from "../assets/images/apside-logo.png";

export default function Navbar() {
  return (
    <nav className="block w-[240px] h-screen bg-[#183650]">
      <div className="flex flex-col justify-evenly">
        <p className="font-['Hind-Regular'] text-[1.5rem] font-medium p-[1.25rem] text-slate-50 text-center">
          Bonjour !
        </p>
        <img
          src="https://pixabay.com/photos/woman-business-fashion-young-3060784/"
          alt="user"
          className="rounded-full mt-8 mb-8"
        />
        <ul className="flex flex-col items-center">
          <li className="li-navbar">
            <Link to="/">Board</Link>
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
