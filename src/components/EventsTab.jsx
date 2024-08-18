import React from "react";
import EventCard from "./partials/EventCard";

function EventsTab({ date, month, day }) {
  const dataObject = [
    {
      color: "#F1D3CE",
      title: "Meeting with John",
      description: "Discuss new project ideas",
      start_time: "10:00 AM",
      end_time: "11:30 AM",
    },
    {
      color: "#D1E9F6",
      title: "Meeting with Albert",
      description: "Discuss new project ideas",
      start_time: "8:00 AM",
      end_time: "2:30 AM",
    },
  ];
  return (
    <div className="w-full p-5 relative sm:w-[35vw] sm:h-full">
      <div></div>
      <h1 className="text-4xl font-semibold">Events</h1>
      <h3 className="text-lg text-zinc-500">{`${date} ${month}, ${day}`} </h3>

      <div id="events" className="overflow-y-auto mt-5">
        <div
          id="add-event"
          className={`rounded-md my-5 px-5 py-3 flex relative bg-[#FEDFED] hover:bg-[#ffbcda] text-[#D65B8F] hover:text-[#a83d6a] duration-300 justify-center items-center`}
        >
          <i class="ri-add-line scale-125 duration-300"></i>
          <h2 className="ml-2">ADD EVENT</h2>
        </div>
        <hr />
        <div className="overflow-auto">
          {dataObject.map((data, i) => (
            <EventCard key={i} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsTab;
