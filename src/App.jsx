import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AddEvent from "./components/partials/AddEvent";
import EditEvent from "./components/EditEvent";

function App() {
  return (
    <div className=" w-[100vw] h-[100vh] overflow-x-hidden overflow-y-auto sm:overflow-y-hidden">
      <Routes>
        <Route path={"/"} element={<Home />}>
          <Route path="/add-event" element={<AddEvent />} />
          <Route
            path="/edit-event/:month/:date/:eventIndex"
            element={<EditEvent />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
