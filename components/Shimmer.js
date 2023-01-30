import React from "react";

const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((e,index) => (
          <div className="shimmer-d" key={index}></div>
        ))}
    </>
  );
};

export default Shimmer;
