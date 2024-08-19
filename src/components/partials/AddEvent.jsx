import React, { useState, useContext } from "react";
import { UserContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

function AddEvent() {
  const { addEvent, selectedDate, selectedMonth } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Create the event object
    const newEvent = {
      title,
      startTime,
      endTime,
      description,
      category,
    };

    // Add the event to the context
    addEvent(selectedMonth, selectedDate, newEvent);

    // Reset the form fields
    setTitle("");
    setStartTime("");
    setEndTime("");
    setDescription("");
    setCategory("");

    // Remove the Add Event Box from the Display
    navigate(-1);
  };

  const navigate = useNavigate();
  const handleNav = () => {
    navigate(-1);
  };

  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <div
        onClick={handleNav}
        className="w-full h-full z-[99] absolute bg-[#000000c5]"
      />
      <div className="w-full max-w-md max-h-[80%] -translate-y-[5%] abolute mx-auto p-6 bg-white shadow-md rounded-md z-[999]">
        <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="startTime"
            >
              Start Time
            </label>
            <input
              type="time"
              id="startTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="endTime"
            >
              End Time
            </label>
            <input
              type="time"
              id="endTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="meeting">Meeting</option>
              <option value="workshop">Workshop</option>
              <option value="conference">Conference</option>
              <option value="social">Social</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-600 text-white font-semibold rounded-md"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;
