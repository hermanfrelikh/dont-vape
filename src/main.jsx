import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { HashRouter as Router } from 'react-router-dom';

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);