import React from "react";

const ResidentalInfo = ({ register, errors, flexDirection }) => {
  return (
    <div
      className="w-full max-w-lg flex"
      style={{ flexDirection: flexDirection === "row" ? "row" : "column" }}
    >
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-city"
        >
          City
        </label>
        <input
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
            errors?.city ? "border-red-500" : ""
          }`}
          id="grid-city"
          type="text"
          placeholder="City"
          name="city" // Add name attribute for form data binding
          {...register("city", { required: true })} // Register input for validation
        />
        {errors?.city && (
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        )}
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-pin"
        >
          Pin
        </label>
        <input
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
            errors?.pin ? "border-red-500" : ""
          }`}
          id="grid-pin"
          type="text"
          placeholder="Pin"
          name="pin" // Add name attribute for form data binding
          {...register("pin", { required: true })} // Register input for validation
        />
        {errors?.pin && (
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        )}
      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-state"
        >
          State
        </label>
        <input
          className={`appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
            errors?.state ? "border-red-500" : ""
          }`}
          id="grid-state"
          type="text"
          placeholder="State"
          name="state" // Add name attribute for form data binding
          {...register("state", { required: true })} // Register input for validation
        />
        {errors?.state && (
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        )}
      </div>
    </div>
  );
};

export default ResidentalInfo;
