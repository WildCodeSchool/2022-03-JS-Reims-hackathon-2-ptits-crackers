import { DayPilotCalendar } from "@daypilot/daypilot-lite-react";

export default function Calendar() {
  return (
    <div className="w-3/6 m-5">
      <DayPilotCalendar days={1} scale="Day" />
    </div>
  );
}
