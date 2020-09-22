import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserProvider from "./providers/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/video-react/dist/video-react.css";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
