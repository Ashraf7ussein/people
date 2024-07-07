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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="middleName"
        placeholder="Middle Name"
        value={formData.middleName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        value={formData.dob}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          name="isMale"
          checked={formData.isMale}
          onChange={handleChange}
        />
        Male
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonForm;
