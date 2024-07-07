import React, { useState } from "react";

const PersonForm = ({ addPerson }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    description: "",
    dob: "",
    isMale: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(formData);
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      description: "",
      dob: "",
      isMale: false,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="">
      <form className="flex mb-4 flex-col gap-2" onSubmit={handleSubmit}>
        <input
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 flex-1"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 flex-1"
          type="text"
          name="middleName"
          placeholder="Middle Name"
          value={formData.middleName}
          onChange={handleChange}
        />
        <input
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 flex-1"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 flex-1"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-blue-500 flex-1"
          type="date"
          name="dob"
          placeholder="Date of Birth"
          value={formData.dob}
          onChange={handleChange}
        />
        <label>
          <input
            className="mx-2 my-4 "
            type="checkbox"
            name="isMale"
            checked={formData.isMale}
            onChange={handleChange}
          />
          Male
        </label>

        <button
          className="px-3 py-1 my-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PersonForm;
