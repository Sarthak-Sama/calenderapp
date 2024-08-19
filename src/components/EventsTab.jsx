import React, { useContext, useEffect, useState } from "react";
import EventCard from "./partials/EventCard";
import { UserContext } from "../context/Context";
import { Link } from "react-router-dom";

function EventsTab() {
  const { selectedDate, selectedMonth, selectedDay, events } =
    useContext(UserContext);

  const [dataObject, setDataObject] = useState([]);
  const [cat, setCat] = useState("all");

  useEffect(() => {
    if (events[selectedMonth] && events[selectedMonth][selectedDate]) {
      setDataObject(events[selectedMonth][selectedDate]);
    } else {
      setDataObject([]);
    }
  }, [events, selectedMonth, selectedDate]);

  return (
    <div className="w-full h-[100vh] p-5 abosulte left-0 top-0 mt-[50vh] md:mt-5 z-[99] bg-white md:relative md:w-[35vw] md:h-full overflow-y-hidden">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">Events</h1>
        <select
          id="selectedCategory"
          value={cat}
          onChange={(e) => setCat(e.target.value)}
          className="w-[25%] p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="" disabled>
            Category
          </option>
          <option value="all">All</option>
          <option value="meeting">Meeting</option>
          <option value="workshop">Workshop</option>
          <option value="conference">Conference</option>
          <option value="social">Social</option>
        </select>
      </div>

      <h3 className="text-lg text-zinc-500">
        {`${
          selectedDate || new Date().getDate()
        } ${selectedMonth}, ${selectedDay}`}{" "}
      </h3>

      <div id="events" className="overflow-hidden mt-5">
        <Link
          to={"/add-event"}
          id="add-event"
          className={`rounded-md my-5 px-5 py-3 flex relative bg-[#FEDFED] hover:bg-[#ffbcda] text-[#D65B8F] hover:text-[#a83d6a] duration-300 justify-center items-center`}
        >
          <i className="ri-add-line scale-125 duration-300"></i>
          <h2 className="ml-2">ADD EVENT</h2>
        </Link>
        <hr />
        <div className="h-[80vh] overflow-y-auto">
          {dataObject.length ? (
            dataObject.map(
              (data, i) =>
                (cat == data.category || cat == "all") && (
                  <EventCard key={i} data={data} index={i} />
                )
            )
          ) : (
            <h3 className="text-zinc-600 font-light py-8">
              There are no events on this day
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default EventsTab;
