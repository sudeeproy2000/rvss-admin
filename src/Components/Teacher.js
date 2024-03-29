import React from "react";
import data from "../Utils/mockdata";

function Teacher() {
  return (
    <div className="flex flex-wrap justify-center ">
      {data.map((d) => (
        <div
          key={d.id}
          className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 cursor-pointer hover:border-2 border-rose-600"
        >
          <img src={d.img} alt="" className="h-21 m-6" />

          <h2 className="text-center px-2 pb-5">{d.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Teacher;
