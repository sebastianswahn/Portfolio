import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
const rootInstance = createRoot(root);

rootInstance.render(<App />);
