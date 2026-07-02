import React from "react";

const HeadTittle = ({ title, Subtitle }) => {
  return (
    <div className="mb-6 p-6 flex flex-col  justify-center  text-center">
      <h1 className="text-2xl font-semibold  text-gray-900 text-center  tracking-tight">
        {title}
      </h1>
      <p className="text-sm text-gray-400 mt-1">{Subtitle}</p>
    </div>
  );
};

export default HeadTittle;
