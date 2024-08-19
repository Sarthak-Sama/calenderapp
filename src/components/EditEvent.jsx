import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../context/Context";

function EditEvent() {
  const { month, date, eventIndex } = useParams();
  const { events, updateEvent, deleteEvent } = useContext(UserContext);
  const navigate = useNavigate();

  const eventToEdit = events[month]?.[date]?.[eventIndex];

  const [title, setTitle] = useState(eventToEdit?.title || "");
  const [startTime, setStartTime] = useState(eventToEdit?.startTime || "");
  const [endTime, setEndTime] = useState(eventToEdit?.endTime || "");
  const [description, setDescription] = useState(
    eventToEdit?.description || ""
  );
  const [category, setCategory] = useState(eventToEdit?.category || "");

  useEffect(() => {
    if (eventToEdit) {
      setTitle(eventToEdit.title || "");
      setStartTime(eventToEdit.startTime || "");
      setEndTime(eventToEdit.endTime || "");
      setDescription(eventToEdit.description || "");
      setCategory(eventToEdit.category || "");
    }
  }, [eventToEdit]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedEvent = { title, startTime, endTime, description, category };

    updateEvent(month, date, eventIndex, updatedEvent);
    navigate(-1);
  };

  const handleDelete = () => {
    deleteEvent(month, date, eventIndex);
    navigate(-1);
  };

  return (
    <div className="absolute w-screen h-screen flex justify-center items-center">
      <div
        onClick={() => navigate(-1)}
        className="w-full h-full absolute z-[9] bg-[#000000c5]"
      />
      {eventToEdit ? (
        <div className="absolute w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-md z-[99]">
          <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
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
              className="w-full p-2 bg-[#7088ff] hover:bg-[#1E3FE1] duration-300 text-white font-semibold rounded-md"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="w-full p-2 mt-3 bg-[#FEDFED] hover:bg-[#ffbcda] text-[#c9487e] hover:text-[#a33563] duration-300 font-semibold rounded-md"
            >
              Delete Event
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2 className="text-4xl font-bold">Event Not Found</h2>
        </div>
      )}
    </div>
  );
}

export default EditEvent;
