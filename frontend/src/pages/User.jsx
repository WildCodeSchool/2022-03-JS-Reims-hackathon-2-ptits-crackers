import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";

export default function User() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex justify-around w-[100%]">
        <div className="h-60 text-center mt-4 border-double border-4 border-blue-900 p-1 flex flex-col content-center">
          <h1>Compte</h1>
          <img
            src="https://picsum.photos/seed/picsum/200/200"
            alt=""
            className="border-2 border-blue-900 content-center w-14 "
          />
          <h2>Nom: Lepetit</h2>
          <h2>Prénom: Crackers</h2>
          <h2>Rôle: Développeur</h2>
          <h2>Nombre projet participé(en fonction du role): 5</h2>
        </div>
        <Calendar />
      </div>
    </div>
  );
}
