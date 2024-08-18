import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <Context>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context>
);
