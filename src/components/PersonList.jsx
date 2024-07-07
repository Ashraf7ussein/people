import React, { useState } from "react";

const PersonList = ({ people, deletePerson }) => {
  return (
    <ul>
      {people.map((person) => (
        <li key={person.id}>
          <div>
            {person.first_name} {person.middle_name} {person.last_name} -{" "}
            {person.email} {person.dob}{" "}
            <button onClick={() => deletePerson(person.id)}>Delete</button>{" "}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
