import React, { useEffect, useState } from "react";
import PersonList from "./components/PersonList";
import axios from "axios";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://sendmail.iconsjo.space/REST/ppl")
      .then((res) => setPeople(res.data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const deletePerson = (id) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const addPerson = (person) => {
    setPeople([person, ...people]);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl">
      <div>
        <h1 className="text-2xl font-bold mb-4">People Management</h1>
        <PersonForm addPerson={addPerson} />
        <PersonList people={people} deletePerson={deletePerson} />
      </div>
    </div>
  );
};

export default App;
