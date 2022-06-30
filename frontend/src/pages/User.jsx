// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import papa from "papaparse";

import Navbar from "../components/Navbar";
import Calendar1 from "../components/Calendar1";

export default function User() {
  /* const [users, setUsers] = useState([]);

  const prepareDataForUsers = (data) => {
    const keys = data.shift();
    const json = data.map((line) => {
      let obj = {};
      keys.forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
      return obj;
    });
    setUsers(json);
  };
  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQY3Rio8jsE6Z3EQYlbtIBZmP8EiE7w3MqUlveAmHicNSWUmOi1MqvS4EJG9DmQmvpfku4JXBKwwbkP/pub?output=csv"
    )
      .then((res) => res.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareDataForUsers(data.data));
  }, []); */
  return (
    <>
      <div className="flex">
        <Navbar />
        <div className="flex justify-around w-[100%]">
          <div className="h-60 text-center mt-4 border-double border-4 border-blue-900 p-1 flex flex-col content-center">
            <h1>Compte</h1>
            <img
              src="https://picsum.photos/seed/picsum/200/200"
              alt=""
              className="border-2 border-blue-900 content-center w-14 "
            />
            <h2>Nom: Lepetit</h2>
            <h2>Prénom: Crackers</h2>
            <h2>Rôle: Développeur</h2>
            <h2>Nombre projet participé(en fonction du role): 5</h2>
          </div>
          <Calendar1 />
        </div>
      </div>
      {/*
      <h1 className="border-4">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h1>{user.first_name}</h1>
          </li>
        ))}
      </ul>
    */}
    </>
  );
}
