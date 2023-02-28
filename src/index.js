import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WorkDictionary from "./components/WorkDictionary.js"
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./auth/Auth";
import Profile from "./components/Profile.js";
import Title from "./components/Title.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Title />
    <Routes>
    <Route exact path="/login" element={<Auth />} />
    <Route exact path="/" element={<WorkDictionary />} />
    <Route exact path="/profile" element={<Profile />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();