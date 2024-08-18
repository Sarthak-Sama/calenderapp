import React, { useState } from "react";

function EventCard({ data }) {
  const [color, setColor] = useState(data.color);
  return (
    <div
      className={`rounded-md my-5 px-5 py-3 flex relative`}
      style={{ backgroundColor: color }}
    >
      <div className="w-[90%]">
        <h2 className="text-xl font-semibold">{data.title}</h2>
        <h3 className="text-zinc-500 font-semibold">{`${data.start_time}-${data.end_time}`}</h3>
        <p className="w-[75%] text-lg font-light">{data.description}</p>
      </div>
      <div className="absolute right-[5%] top-[25%]">
        <i class="ri-more-2-line text-5xl text-zinc-500 hover:text-black duration-400"></i>
      </div>
    </div>
  );
}

export default EventCard;
