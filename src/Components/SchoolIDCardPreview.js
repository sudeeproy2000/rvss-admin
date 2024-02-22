import React from "react";

const SchoolIDCardPreview = ({ studentData }) => {
  return (
    <div className="px-20 cursor-pointer">
      <div className=" mt-10 border-2 p-5">
        <div className="flex flex-row justify-around bg-amber-800 p-5">
          <div className="basis-1/5">
            <img src={studentData.img} alt="School Logo" className="size-40" />
          </div>
          <div className="basis4/5 ">
            <h1 className="text-5xl font-medium text-white mb-3">
              {studentData.schoolName}
            </h1>
            <div className="p-3 text-2xl font-normal text-white flex justify-center gap-2">
              <h3>{studentData.schoolStreet}, </h3>
              <h3>{studentData.schoolCity}, </h3>
              <h3>{studentData.schoolState}, </h3>
              <h3>{studentData.schoolPincode}</h3>
            </div>
            <div className="p-3 text-2xl font-normal text-white flex justify-center gap-3">
              <h3>Contact No:{studentData.schoolPhone} </h3>
              <h3>Email Id :{studentData.schoolEmail} </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-around text-xl font-medium p-3 bg-slate-100">
          <h3>School Id : {studentData.schoolId}</h3>
          <h3>Admission No : {}</h3>
        </div>

        <div className="flex justify-center items-center mt-5 mb-5">
          <img
            src={studentData.photo}
            alt="Student Photo"
            className="rounded size-80"
          />
        </div>
        <div className="flex justify-around text-3xl font-semibold p-3 border-2 bg-slate-200">
          <h1>Name: {studentData.name}</h1>
        </div>
        <div className="flex justify-around text-2xl font-medium p-3 border-2 bg-slate-200">
          <h2>Class: {studentData.class}</h2>
          <h2>Section: {studentData.section}</h2>
        </div>
        <div className="flex justify-around text-2xl font-medium p-3 border-2 bg-slate-200">
          <h2>Blood Group: {studentData.bloodGroup}</h2>
          <h2>DOB: {studentData.dob}</h2>
        </div>
        <div className="flex justify-around text-2xl font-medium p-3 border-2 bg-slate-200">
          <h2>Gurdian Contact No: {studentData.contactNo}</h2>
        </div>
      </div>
    </div>
  );
};

export default SchoolIDCardPreview;
