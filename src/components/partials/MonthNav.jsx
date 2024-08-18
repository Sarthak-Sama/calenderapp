import React, { useState } from "react";
import Calendar from "./Calender";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function MonthNav({ month, date }) {
  const [monthName, setMonthName] = useState(month);

  const changeMonth = (direction) => {
    const currentIndex = monthNames.indexOf(monthName);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? monthNames.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === monthNames.length - 1 ? 0 : currentIndex + 1;
    }

    setMonthName(monthNames[newIndex]);
  };

  return (
    <div className="w-[70vw] h-[3vh] bg-[#F7F7FD] pt-5">
      <h1 className="text-2xl text-black font-semibold text-center bg-[#F7F7FD]">
        <i
          onClick={() => changeMonth("prev")}
          className="ri-arrow-left-s-line text-zinc-400 hover:text-black duration-400 text-xl mr-2 cursor-pointer"
        ></i>
        {monthName}
        <i
          onClick={() => changeMonth("next")}
          className="ri-arrow-right-s-line text-zinc-400 hover:text-black duration-400 text-xl ml-2 cursor-pointer"
        ></i>
      </h1>
      <Calendar date={date} month={monthName} />
    </div>
  );
}

export default MonthNav;
