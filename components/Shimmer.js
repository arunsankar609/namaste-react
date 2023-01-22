import React from "react";

const Shimmer = () => {
  return (
    <>
      {Array(10).fill("").map((e)=><div className="shimmer-d" key={e.index}></div>)}
    </>
  );
};

export default Shimmer;
