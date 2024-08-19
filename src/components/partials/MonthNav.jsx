import React, { useContext } from "react";
import Calendar from "./Calender";
import { UserContext } from "../../context/Context";

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

function MonthNav() {
  const { selectedMonth, setSelectedMonth, setSelectedDate, setSelectedDay } =
    useContext(UserContext);

  const changeMonth = (direction) => {
    const currentIndex = monthNames.indexOf(selectedMonth);
    let newIndex;

    if (direction === "prev") {
      newIndex = currentIndex === 0 ? monthNames.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === monthNames.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedMonth(monthNames[newIndex]);
    setSelectedDate(null); // Clear the selected date when the month changes
    setSelectedDay(null); // Clear the selected day when the month changes
  };

  return (
    <div className="w-[100vw] h-[100vh] fixed left-0 top-0 z-[9] md:relative md:w-[70vw] md:h-[3vh] bg-[#F7F7FD] pt-5">
      <h1 className="text-2xl text-black font-semibold text-center bg-[#F7F7FD]">
        <i
          onClick={() => changeMonth("prev")}
          className="ri-arrow-left-s-line text-zinc-400 hover:text-black duration-400 text-xl mr-2 cursor-pointer"
        ></i>
        {selectedMonth}
        <i
          onClick={() => changeMonth("next")}
          className="ri-arrow-right-s-line text-zinc-400 hover:text-black duration-400 text-xl ml-2 cursor-pointer"
        ></i>
      </h1>
      <Calendar />
    </div>
  );
}

export default MonthNav;
