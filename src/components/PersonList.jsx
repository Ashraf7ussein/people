import React, { useState } from "react";

const PersonList = ({ people, deletePerson, editPerson }) => {
  return (
    <ul>
      {people.map((person) => (
        <li
          className="flex items-center justify-between bg-gray-100 px-4 py-2 mb-2 rounded-md"
          key={person.id}
        >
          <div>
            {person.first_name} {person.middle_name} {person.last_name} -{" "}
            {person.email} {person.dob}{" "}
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
              onClick={() => deletePerson(person.id)}
            >
              Delete
            </button>{" "}
            <button
              className="px-3 py-1 bg-blue-400 text-white rounded-md hover:bg-red-600 focus:outline-none"
              onClick={() => editPerson(person.id)}
            >
              Edit
            </button>{" "}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
