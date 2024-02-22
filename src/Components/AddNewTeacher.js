import React from "react";
import BulkUpload from "./TeacherBulkUpload";

function AddNewTeacher() {
  return (
    <>
      <BulkUpload />

      <form className="p-10">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add Teacher Manually
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  autoComplete="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="employee"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Employee Id
              </label>
              <div className="mt-2">
                <input
                  type="employee"
                  name="employee"
                  id="employee"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="class-teacher"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                PGT/TGT
              </label>
              <div className="mt-2">
                <select
                  id="class-teacher"
                  name="class-teacher"
                  autoComplete="class-teacher"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>PGT</option>
                  <option>TGT</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="class-teacher"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Designation
              </label>
              <div className="mt-2">
                <select
                  id="class-teacher"
                  name="class-teacher"
                  autoComplete="class-teacher"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                  <option>Head Master</option>
                  <option>Assistant Teacher</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12 mt-6">
          <fieldset>
            <legend className="text-sm font-semibold leading-6 text-gray-900">
              Class Teacher
            </legend>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Select the teacher is class teacher or not
            </p>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="class-teacher-yes"
                  name="class-teacher"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="class-teacher-validation"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-x-3">
                <input
                  id="class-teacher-no"
                  name="class-teacher"
                  type="radio"
                  className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="push-email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  No
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        <div className="border-b border-gray-900/10 pb-12 mt-6">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Only select this option{" "}
            <span className="text-red-800">
              {" "}
              if the Tracher is class teacher?
            </span>
          </h2>
          <div className="sm:col-span-2">
            <label
              htmlFor="class"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Class
            </label>
            <div className="mt-2">
              <select
                id="class"
                name="class"
                autoComplete="class"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="section"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Section
            </label>
            <div className="mt-2">
              <select
                id="section"
                name="section"
                autoComplete="section"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              >
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}

export default AddNewTeacher;
