export default function Navbar() {
  return (
    <nav className="block w-[240px] h-screen bg-[#183650]">
      <p className="white text-center">Hello user ! </p>
      <img src="" alt="user" className="rounded-full" />
      <ul className="">
        <li className="li-navbar">Board</li>
        <li className="li-navbar">Mon agence</li>
        <li className="li-navbar">Mon agenda</li>
        <li className="li-navbar">Mes projets</li>
      </ul>
    </nav>
  );
}
