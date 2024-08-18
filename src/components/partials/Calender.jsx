import React, { useState } from "react";

function Calendar({ date, month }) {
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

  // State to track selected date and month
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  // Get the number of days in the current month and the previous month
  const daysInMonth = months[month];
  const previousMonth =
    month === "January"
      ? "December"
      : Object.keys(months)[Object.keys(months).indexOf(month) - 1];
  const daysInPreviousMonth = months[previousMonth];

  // Get the first day of the current month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const firstDayOfMonth = new Date(
    `${month} 1, ${new Date().getFullYear()}`
  ).getDay();

  // Adjust firstDayOfMonth to make Monday as the first day of the week
  const startDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  // Handle date click
  const handleDateClick = (day, mon) => {
    if (day == selectedDate && mon == selectedMonth) {
      setSelectedDate(null);
      setSelectedMonth(null);
    } else {
      setSelectedDate(day);
      setSelectedMonth(mon);
    }
  };

  return (
    <div className="w-[70vw] h-[95vh] p-5 pt-0 bg-[#F7F7FD] flex flex-wrap justify-center overflow-y-auto">
      {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, i) => (
        <div key={i} className="w-[8vw] mx-[.5vw] mt-5 mb-1">
          <h3 className="text-center text-zinc-400 text-sm">{day}</h3>
        </div>
      ))}

      {/* Fill the start of the calendar with the previous month's dates */}
      {Array.from({ length: startDay }, (_, i) => (
        <div
          key={`prev-${i}`}
          className="w-[8vw] h-[8vw] m-[.5vw] bg-white rounded-md border-none border-2 flex items-start justify-end p-4 text-zinc-300"
        >
          <h3 className="text-zinc-300 text-sm">
            {daysInPreviousMonth - startDay + i + 1}
          </h3>
        </div>
      ))}

      {/* Generate dates for the current month */}
      {Array.from({ length: daysInMonth }, (_, i) => (
        <div
          onClick={() => handleDateClick(i + 1, month)}
          key={i}
          className={`w-[8vw] h-[8vw] m-[.5vw] bg-white rounded-md border-none border-2 flex items-start justify-end p-4 cursor-pointer`}
        >
          <h3
            className={`text-sm flex items-center justify-center ${
              i + 1 === date &&
              month === new Date().toLocaleString("default", { month: "long" })
                ? "rounded-full bg-[#1E3FE1] text-white w-[2vw] h-[2vw]"
                : ""
            } ${
              selectedDate == i + 1 && selectedMonth == month
                ? "rounded-full border-[1px] border-[#1E3FE1] w-[2vw] h-[2vw]"
                : ""
            }`}
          >
            {i + 1}
          </h3>
        </div>
      ))}

      {/* Fill the end of the calendar with the next month's dates */}
      {Array.from(
        { length: (7 - ((daysInMonth + startDay) % 7)) % 7 },
        (_, i) => (
          <div
            key={`next-${i}`}
            className="w-[8vw] h-[8vw] m-[.5vw] bg-white rounded-md border-none border-2 flex items-start justify-end p-4 text-zinc-300"
          >
            <h3 className="text-zinc-300 text-sm">{i + 1}</h3>
          </div>
        )
      )}
    </div>
  );
}

export default Calendar;
