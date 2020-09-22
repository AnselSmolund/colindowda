import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserProvider from "./providers/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/video-react/dist/video-react.css";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
