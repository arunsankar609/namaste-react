import React from "react";
import ReactDOM from "react-dom/client";

import Headert from "./components/Header";

import Body from "./components/Body";
import Footer from "./components/Footer";

const Appon1 = () => {
  return (
    <div id="container">
      <Headert />
      <Body />
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Appon1 />);
