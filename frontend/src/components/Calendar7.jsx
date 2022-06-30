import { DayPilotCalendar } from "@daypilot/daypilot-lite-react";

export default function Calendar() {
  return (
    <div className=" m-5">
      <DayPilotCalendar days={7} scale="Day" />
    </div>
  );
}
