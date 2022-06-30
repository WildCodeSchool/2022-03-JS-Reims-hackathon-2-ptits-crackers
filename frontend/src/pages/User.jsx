import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";
import Note from "../components/Note";

export default function User() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex justify-between w-[100%] h-[100vh] items-center ml-12">
        <div className="flex flex-col items-center gap-4">
          <div className="h-48 text-center border-double border-4 border-blue-900 p-1 flex flex-col justify-center w-[100%]">
            <h1>Mon compte</h1>
            <h2>M. Crackers Lepetit</h2>
            <h2>Rôle: Développeur</h2>
          </div>
          <Note />
        </div>
        <Calendar />
        <div>
          <div className="paper">
            <div className="pin">
              <div className="shadow" />
              <div className="metal" />
              <div className="bottom-circle" />
            </div>
            <div className="flex flex-col p-8">
              <p>Aller dormir</p>
            </div>
          </div>
          <div className="paper1">
            <div className="pin1">
              <div className="shadow" />
              <div className="metal" />
              <div className="bottom-circle" />
            </div>
            <div className="flex flex-col p-8">
              <p>Ne pas finir premier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
