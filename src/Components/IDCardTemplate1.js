import React from "react";

function IdCardTemplate1() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <div className="w-204 h-324 bg-white border border-gray-300 rounded-lg shadow-md flex flex-col">
          <div id="header" className="flex bg-red-950">
            <div className="basis-1/4 place-items-center p-3">
              <img src="./Assets/id-school-logo.png" alt="" />
            </div>
            <div className="flex flex-col justify-center basis-3/4 place-items-center text-white">
              <h1 className="font-semibold text-2xl ">
                KENDRIYA VIDYALAYA NO.1 SALT LAKE
              </h1>
              <p className="font-light text-yellow-600 text-sm">
                An autoimmune body under Ministry of Education, Govt Of India
              </p>
              <h6 className="">
                Labony, EB Block, Saltlake Sector-I, Kolkata - 700064
              </h6>
            </div>
          </div>

          <div
            id="school-contact-details"
            className="flex justify-around bg-yellow-600 text-white"
          >
            <h4>Email:</h4>
            <h4>Phone No:</h4>
          </div>

          <div id="session" className="flex justify-center items-center">
            <h3 className="text-lg text-blue-800">Session: 2024-2025</h3>
          </div>

          <div
            id="student-photo"
            className="flex justify-center place-items-center p-1"
          >
            <img src="./Assets/student.jpg" alt="" className="w-74 h-99" />
          </div>

          <div id="student-name" className="flex justify-center p-1">
            <h1 className="text-lg font-medium p-1">
              Name: <span className="text-blue-800">Student Name</span>
            </h1>
          </div>

          <div id="student-details" className="flex justify-center p-1">
            <div
              id="student-details"
              className="flex flex-col place-items-center justify-center border-2"
            >
              <div className="flex gap-12 p-1 text-sm">
                <h3>
                  Class:<span className="text-blue-800">X</span>
                </h3>
                <h3>
                  Section:<span className="text-blue-800">A</span>
                </h3>
              </div>
              <h3 className="p-1 text-sm">
                Father's Name:
                <span className="text-blue-800">Animesh Sarkar</span>
              </h3>
              <div className="flex gap-12 p-1 text-sm">
                <h3>
                  Date of Birth:
                  <span className="text-blue-800">10/10/2010</span>
                </h3>
                <h3>
                  Blood Group:<span className="text-red-700">o+</span>
                </h3>
              </div>
              <h3 className="p-1 text-sm">
                Contact No:<span className="text-blue-800">9123456789</span>
              </h3>
              <h3 className="p-1 text-sm">
                Student ID UBI:<span className="text-blue-800">1234567890</span>
              </h3>
              <h3 className="p-1 text-sm">
                School ID:<span className="text-blue-800">xdbcdj1425a</span>
              </h3>
              <div className="p-1 text-sm">
                <h3>
                  Address:
                  <span className="text-blue-800">
                    ABC Sarani, Salt Lake, Kolkata - 700034
                  </span>
                </h3>
              </div>
            </div>
          </div>

          <div id="p-signature" className="flex flex-col place-items-end mr-5">
            <img
              id="principle-signature"
              src="./Assets/signature.png"
              alt=""
              className="mr-5 w-12 h-5 "
            />
            <h4 className="flex justify-end text-xs">Principle Signature</h4>
          </div>
        </div>
      </div>
      <div id="button" className="flex space-x-6 p-4">
        <button className="border-2 text-2xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-12 rounded-full">
          Edit
        </button>
        <button className="border-2 text-2xl bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-8 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
}

export default IdCardTemplate1;
