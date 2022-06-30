import Navbar from "../components/Navbar";
import Calendar7 from "../components/Calendar7";

export default function Diary() {
  return (
    <div className="flex">
      <Navbar />
      <div className="flex justify-around w-[100%] ">
        <Calendar7 />
      </div>
    </div>
  );
}
