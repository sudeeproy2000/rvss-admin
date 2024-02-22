import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex flex-row justify-around bg-blue-50 gap-8 text-lg font-normal cursor-pointer p-2 ">
      <NavLink to="/" className="hover:font-medium">
        All Teachers
      </NavLink>
      <NavLink to="/idcard" className="hover:font-medium">
        ID Card
      </NavLink>
      <NavLink to="/addnewteacher" className="hover:font-medium">
        Add New Teacher
      </NavLink>
      <NavLink to="/assignclassteacher" className="hover:font-medium">
        Assign Class Teacher
      </NavLink>
    </div>
  );
}

export default Nav;
