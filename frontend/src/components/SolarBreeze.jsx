import Navbar from "./Navbar";
import FirstFeuille from "./FirstFeuille";
import SecondFeuille from "./SecondFeuille";
import "./feuille.css";

export default function SolarBreeze() {
  return (
    <div className="flex ">
      <div className="flex flex-row overflow-x-scroll justify-around gap-10">
        <Navbar />
        <FirstFeuille />
        <SecondFeuille />
      </div>
    </div>
  );
}
