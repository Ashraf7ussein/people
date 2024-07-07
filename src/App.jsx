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
    setPeople([...people, person]);
  };

  return (
    <div>
      <h1>People Management</h1>
      <PersonForm addPerson={addPerson} />
      <PersonList people={people} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
