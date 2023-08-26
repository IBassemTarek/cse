import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/login_screen";
import AddNewScreen from "./screens/AddNewScreen";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HomeScreen />);
