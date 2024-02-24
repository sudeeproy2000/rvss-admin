import React from "react";
import idCardData from "../Utils/mockIdCardImage";
import { useNavigate } from "react-router-dom";

function SchoolIDCard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap justify-center ">
      {idCardData.map((d) => (
        <div
          onClick={() => navigate(`/schoolidcardform/${d.id}`)}
          key={d.id}
          className="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52 cursor-pointer hover:border-2 border-rose-600"
        >
          <img src={d.img} alt="ID Card Template" className="h-21 m-6" />
          <h2 className="text-center px-2 pb-5">{d.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default SchoolIDCard;
