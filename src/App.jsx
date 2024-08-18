import React from "react";
import EventsTab from "./components/EventsTab";
import Calendar from "./components/partials/Calender";
import MonthNav from "./components/partials/MonthNav";

function App() {
  const today = new Date();
  const date = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });
  const dayName = today.toLocaleString("default", { weekday: "long" });

  return (
    <div className="flex w-[100vw] h-[100vh] overflow-hidden">
      <EventsTab date={date} month={month} day={dayName} />
      <div>
        <MonthNav month={month} date={date} />
      </div>
    </div>
  );
}

export default App;
