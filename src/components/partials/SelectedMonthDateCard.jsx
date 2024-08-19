import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/Context";

function SelectedMonthDateCard({ i, daysInMonth }) {
  const {
    selectedDate,
    selectedMonth,
    setSelectedDate,
    setSelectedDay,
    events,
  } = useContext(UserContext);

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

  const daysEvents = events[selectedMonth]?.[i + 1] ?? [];
  console.log(daysEvents);

  //   // Extract day events based on the selected month and day
  //   const dayEvents = events[selectedMonth]?.[i + 1] ?? [];

  //   const [countObject, setCountObject] = useState({
  //     meetings: 0,
  //     social: 0,
  //     workshops: 0,
  //   });

  //   useEffect(() => {
  //     // Calculate counts based on dayEvents
  //     const initialCounts = {
  //       meetings: 0,
  //       social: 0,
  //       workshops: 0,
  //     };

  //     dayEvents.forEach((event) => {
  //       if (event.category === "meetings") {
  //         initialCounts.meetings += 1;
  //       } else if (event.category === "social") {
  //         initialCounts.social += 1;
  //       } else if (event.category === "workshops") {
  //         initialCounts.workshops += 1;
  //       }
  //     });

  //     setCountObject(initialCounts);
  //   }, dayEvents); // Dependency array should include dayEvents

  return (
    <div
      onClick={() => handleDateClick(i + 1, selectedMonth)}
      key={i}
      className={`relative w-[11vw] h-[11vw] md:w-[8vw] md:h-[8vw] md:m-[.5vw] bg-white rounded-md border-none border-2 flex items-start justify-end p-4 cursor-pointer`}
    >
      <h3
        className={`text-sm flex items-center justify-center ${
          i + 1 === new Date().getDate() &&
          selectedMonth ===
            new Date().toLocaleString("default", { month: "long" })
            ? "rounded-full bg-[#1E3FE1] text-white px-1 py-3 w-[7vw] h-[5vw] md:w-[2vw] md:h-[2vw] md:p-0"
            : ""
        } ${
          selectedDate === i + 1 && selectedMonth === selectedMonth
            ? "rounded-full border-[1px] border-[#1E3FE1] px-1 py-3 w-[7vw] h-[5vw] md:w-[2vw] md:h-[2vw] md:p-0"
            : ""
        }`}
      >
        {i + 1}
      </h3>
      <div className="w-[90%] h-[60%] p-2 absolute bottom-[5%] left-[5%] hidden xl:block pt-4">
        {daysEvents.filter((event) => event.category == "meeting").length >
        0 ? (
          <div className="text-[.75vw] flex justify-between items-center bg-[#E6ECFE] hover:bg-[#a7bcfb] hvr mb-1 rounded-md px-[.5vw] py-[.25vw]">
            <h4>Meetings:</h4>
            <span className="bg-[#A0AEF8] inline-block w-[20%] h-[20%] text-xs text-center rounded-sm">
              {daysEvents.filter((event) => event.category == "meeting").length}
            </span>
          </div>
        ) : (
          []
        )}

        {daysEvents.filter((event) => event.category == "social").length > 0 ? (
          <div className="text-[.75vw] flex justify-between items-center bg-[#FEDFED] hover:bg-[#fc9ec8] hvr mb-1 rounded-md px-[.5vw] py-[.25vw]">
            <h4>Social:</h4>
            <span className="bg-[#D55A8E] inline-block w-[20%] h-[20%] text-xs text-center rounded-sm">
              {daysEvents.filter((event) => event.category == "social").length}
            </span>
          </div>
        ) : (
          []
        )}
      </div>
    </div>
  );
}

export default SelectedMonthDateCard;
