import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

function Context(props) {
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(
    new Date().toLocaleString("default", { month: "long" })
  );
  const [selectedDay, setSelectedDay] = useState(
    new Date().toLocaleString("default", { weekday: "long" })
  );

  useEffect(() => {
    const today = new Date();
    if (selectedDate === null) {
      setSelectedDate(today.getDate());
    }
    if (selectedMonth === null) {
      setSelectedMonth(today.toLocaleString("default", { month: "long" }));
    }
    if (selectedDay === null) {
      setSelectedDay(today.toLocaleString("default", { weekday: "long" }));
    }
  }, [selectedDate, selectedMonth, selectedDay]);

  const addEvent = (month, date, event) => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [month]: {
        ...(prevEvents[month] || {}),
        [date]: [...(prevEvents[month]?.[date] || []), event],
      },
    }));
  };

  const deleteEvent = (month, date, eventIndex) => {
    setEvents((prevEvents) => {
      if (
        !prevEvents[month] ||
        !prevEvents[month][date] ||
        eventIndex < 0 ||
        eventIndex >= prevEvents[month][date].length
      ) {
        return prevEvents; // No change if date not found or index out of bounds
      }
      const newEvents = { ...prevEvents };
      newEvents[month][date].splice(eventIndex, 1);
      if (newEvents[month][date].length === 0) {
        delete newEvents[month][date];
      }
      if (Object.keys(newEvents[month]).length === 0) {
        delete newEvents[month];
      }
      return newEvents;
    });
  };

  const updateEvent = (month, date, eventIndex, updatedEvent) => {
    setEvents((prevEvents) => {
      if (
        !prevEvents[month] ||
        !prevEvents[month][date] ||
        eventIndex < 0 ||
        eventIndex >= prevEvents[month][date].length
      ) {
        return prevEvents; // No change if date not found or index out of bounds
      }
      const newEvents = { ...prevEvents };
      newEvents[month][date][eventIndex] = updatedEvent;
      return newEvents;
    });
  };

  return (
    <UserContext.Provider
      value={{
        events,
        addEvent,
        deleteEvent,
        updateEvent,
        selectedDate,
        setSelectedDate,
        selectedMonth,
        setSelectedMonth,
        selectedDay,
        setSelectedDay,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export default Context;
