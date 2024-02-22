import React from "react";

function Header() {
  return (
    <div className="flex flex-row justify-around bg-white">
      <img className="w-44" src="./Assets/rvssLogo.png" />
      <div className="flex flex-row gap-8 text-lg mt-6 font-normal ">
        <div className="text-amber-700">Admin Name</div>
        <div className="cursor-pointer text-amber-700 hover:font-medium">
          LogOut
        </div>
      </div>
    </div>
  );
}

export default Header;
