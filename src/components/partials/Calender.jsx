import React, { useContext, useState } from "react";
import { UserContext } from "../../context/Context";
import SelectedMonthDateCard from "./SelectedMonthDateCard";

function Calendar() {
  // Retrieving Context
  const {
    selectedDate,
    selectedMonth,
    setSelectedDate,
    setSelectedMonth,
    setSelectedDay,

    events,
  } = useContext(UserContext);

  const months = {
    January: 31,
    February: 28,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
  };

  const [count, setCount] = useState({ meetings: 0, social: 0, workshops: 0 });

  const daysInMonth = months[selectedMonth];
  const previousMonth =
    selectedMonth === "January"
      ? "December"
      : Object.keys(months)[Object.keys(months).indexOf(selectedMonth) - 1];
  const daysInPreviousMonth = months[previousMonth];

  const firstDayOfMonth = new Date(
    `${selectedMonth} 1, ${new Date().getFullYear()}`
  ).getDay();
  const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  return (
    <div className="w-[95%] h-[40%] mx-auto md:w-[70vw] md:h-[95vh] p-5 pt-0 bg-[#F7F7FD] flex flex-wrap justify-center overflow-y-auto">
      {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, i) => (
        <div key={i} className="w-[11vw] md:w-[8vw] mx-[.5vw] mt-5 mb-1">
          <h3 className="text-center text-zinc-400 text-sm">{day}</h3>
        </div>
      ))}

      {Array.from({ length: startDay }, (_, i) => (
        <div
          key={`prev-${i}`}
          className="w-[11vw] h-[11vw] md:w-[8vw] md:h-[8vw] md:m-[.5vw] bg-white rounded-md border-none border-2 flex items-start justify-end p-4 text-zinc-300"
        >
          <h3 className="text-zinc-300 text-sm">
            {daysInPreviousMonth - startDay + i + 1}
          </h3>
        </div>
      ))}

      {Array.from({ length: daysInMonth }, (_, i) => (
        <SelectedMonthDateCard i={i} daysInMonth={daysInMonth} />
      ))}

      {Array.from(
        { length: (7 - ((daysInMonth + startDay) % 7)) % 7 },
        (_, i) => (
          <div
            key={`next-${i}`}
            className="w-[11vw] h-[11vw] md:w-[8vw] md:h-[8vw] md:m-[.5vw] bg-white rounded-md border-none border-2 flex items-start justify-end p-4 text-zinc-300"
          >
            <h3 className="text-zinc-300 text-sm">{i + 1}</h3>
          </div>
        )
      )}
    </div>
  );
}

export default Calendar;
