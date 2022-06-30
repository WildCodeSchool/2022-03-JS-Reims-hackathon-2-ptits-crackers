import Navbar from "./Navbar";
import fullAgenda from "../assets/images/fullagenda.png";

export default function Agenda() {
  return (
    <div className="flex ">
      <Navbar />
      <div className="tableau p-4">
        <h1 className="p-5 text-center text-2xl">Agenda</h1>
        <img src={fullAgenda} alt="calendar" className="w-full h-auto" />
      </div>
    </div>
  );
}
