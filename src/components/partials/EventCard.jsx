import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/Context";

function EventCard({ data, index }) {
  const { selectedMonth, selectedDate } = useContext(UserContext);
  const [color, setColor] = useState("#F7F7FD");
  console.log(data);
  return (
    <div
      className={`rounded-md my-5 px-5 py-3 flex relative`}
      style={{ backgroundColor: color }}
    >
      <div className="w-[90%]">
        <h2 className="text-xl font-semibold">
          {data.title}{" "}
          <span className="text-sm ml-1 translate-y-[-10%] inline-block text-zinc-500 italic">
            ({data.category})
          </span>
        </h2>
        <h3 className="text-zinc-500 font-semibold">{`${data.startTime}-${data.endTime}`}</h3>
        <p className="w-[75%] text-lg font-light">{data.description}</p>
      </div>
      <Link
        to={`/edit-event/${selectedMonth}/${selectedDate}/${index}`}
        className="absolute right-[5%] top-[25%]"
      >
        <i class="ri-more-2-line text-5xl text-zinc-500 hover:text-black duration-400"></i>
      </Link>
    </div>
  );
}

export default EventCard;
