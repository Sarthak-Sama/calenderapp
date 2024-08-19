import React, { useContext } from "react";
import { UserContext } from "../../context/Context";

function Calendar() {
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

  const handleDateClick = (day, mon) => {
    if (mon === selectedMonth) {
      if (day === selectedDate) {
        setSelectedDate(null);
        setSelectedDay(null);
      } else {
        setSelectedDate(day);
        const selectedFullDate = new Date(
          `${mon} ${day}, ${new Date().getFullYear()}`
        );
        const selectedDayName = selectedFullDate.toLocaleString("default", {
          weekday: "long",
        });

        setSelectedDay(selectedDayName);
      }
    }
  };

  const getCategoryCounts = (day) => {
    const dayEvents = events[selectedMonth]?.[day] || [];
    const counts = { meetings: 0, social: 0, workshops: 0 };

    dayEvents.forEach((event) => {
      if (event.category === "meetings") counts.meetings++;
      if (event.category === "social") counts.social++;
      if (event.category === "workshops") counts.workshops++;
    });

    return counts;
  };

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

      {Array.from({ length: daysInMonth }, (_, i) => {
        const day = i + 1;
        const counts = getCategoryCounts(day);

        return (
          <div
            onClick={() => handleDateClick(day, selectedMonth)}
            key={i}
            className={`relative w-[11vw] h-[11vw] md:w-[8vw] md:h-[8vw] md:m-[.5vw] bg-white rounded-md border-none border-2 flex items-start justify-end p-4 cursor-pointer`}
          >
            <h3
              className={`text-sm flex items-center justify-center ${
                day === new Date().getDate() &&
                selectedMonth ===
                  new Date().toLocaleString("default", { month: "long" })
                  ? "rounded-full bg-[#1E3FE1] text-white px-1 py-3 w-[7vw] h-[5vw] md:w-[2vw] md:h-[2vw] md:p-0"
                  : ""
              } ${
                selectedDate === day && selectedMonth === selectedMonth
                  ? "rounded-full border-[1px] border-[#1E3FE1] px-1 py-3 w-[7vw] h-[5vw] md:w-[2vw] md:h-[2vw] md:p-0"
                  : ""
              }`}
            >
              {day}
            </h3>
            <div className="w-[90%] h-[60%] p-2 absolute bottom-[5%] left-[5%] hidden xl:block">
              {counts.meetings > 0 && (
                <div className="text-xs flex justify-between items-center bg-purple-400 mb-1 rounded-md px-[.225vw] py-[.1vw]">
                  <h4>Meetings: </h4>
                  <span className="bg-blue-400 inline-block w-[20%] h-[20%] text-center">
                    {counts.meetings}
                  </span>
                </div>
              )}
              {counts.social > 0 && (
                <div className="text-xs flex justify-between items-center bg-purple-400 mb-1 rounded-md px-[.225vw] py-[.1vw]">
                  <h4>Social: </h4>
                  <span className="bg-blue-400 inline-block w-[20%] h-[20%] text-center">
                    {counts.social}
                  </span>
                </div>
              )}
              {counts.workshops > 0 && (
                <div className="text-xs flex justify-between items-center bg-purple-400 mb-1 rounded-md px-[.225vw] py-[.1vw]">
                  <h4>Workshops: </h4>
                  <span className="bg-blue-400 inline-block w-[20%] h-[20%] text-center">
                    {counts.workshops}
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}

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
