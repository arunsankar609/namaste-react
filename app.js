import React from "react";
import ReactDOM from "react-dom/client";

import Headert from "./components/Header";

import Body from "./components/Body";

const Appon1 = () => {
  return (
    <div id="container">
      <Headert />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Appon1 />);
