import React from "react";
import loader from "/loader.gif"

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <img src={loader} alt="" className="w-20" />
    </div>
  );
};

export default Loader;
