import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement(
//   "h1",
//   {
//     id: "head1",
//   },
//   "First Heading with parcel"
// );

// const heading2 = React.createElement(
//   "h2",
//   {
//     id: "head2",
//   },
//   "Second heading"
// );
// const heading3=<h3>This is heading 3</h3>

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [heading1, heading2,heading3]
// );
const heading1 = <h1 id="heading1">The content goes here...</h1>;
const Headert=()=>{
  return(<div className="header">
<div className="logo">
<img className="logo" src="data:image/png;base64,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" alt="" />
</div>
<div className="searchbar">
<input className="input-txt" type="text" placeholder="search" />
</div>
<div className="userIcon">
<img className="user-icon" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
</div>
  </div>)
}
const Appon1 = () => {
  return (
    <div id="container">
      <Headert/>
      {heading1}
      <h2 id="head1">This is h2</h2>
      <h2 id="head1">This is h2 duplicate</h2>
    </div>
  );
};



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Appon1/>);
