import React from "react";

const UserCredentials = ({ register, errors, flexDirection }) => {
  return (
    <div
      className="w-full max-w-lg flex"
      style={{ flexDirection: flexDirection === "row" ? "row" : "column" }}
    >
      <div className="w-1/2 flex flex-col px-3 mb-6">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-first-name"
        >
          First Name
        </label>
        <input
          id="grid-first-name"
          type="text"
          placeholder="First Name"
          name="firstName"
          {...register("firstName", { required: true })}
          className={`appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
            errors?.firstName ? "border-red-500" : ""
          }`}
        />
        {errors?.firstName && (
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        )}
      </div>
      <div className="w-1/2 flex flex-col px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-last-name"
        >
          Last Name
        </label>
        <input
          className={`appearance-none block bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
            errors?.lastName ? "border-red-500" : ""
          }`}
          id="grid-last-name"
          type="text"
          placeholder="Doe"
          name="lastName"
          {...register("lastName", { required: true })}
        />
        {errors?.lastName && (
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        )}
      </div>
    </div>
  );
};

export default UserCredentials;
