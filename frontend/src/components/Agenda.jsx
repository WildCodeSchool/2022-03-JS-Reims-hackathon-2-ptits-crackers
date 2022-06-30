import Navbar from "./Navbar";

export default function Agenda() {
  return (
    <div className="flex ">
      <Navbar />
      <div className="tableau p-4">
        <h1 className="p-5 text-center text-2xl">Agenda</h1>
        {/* <DayPilotCalendar days={7} scale="Day" /> */}
      </div>
    </div>
  );
}
