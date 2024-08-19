import React from "react";
import EventsTab from "./EventsTab";
import MonthNav from "./partials/MonthNav";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="flex relative">
      <EventsTab />
      <div>
        <MonthNav />
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
