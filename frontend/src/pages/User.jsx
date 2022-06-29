/* eslint-disable no-return-assign */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import papa from "papaparse";
import Calendar from "@components/Calendar";

export default function User() {
  const [users, setUsers] = useState([]);

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
  }, []);
  return (
    <>
      <Calendar />
      <h1 className="text-3xl font-bold underline">Hello les users</h1>
      <p>
        Voir <Link to="/">Home</Link>
      </p>
      <p>
        Voir <Link to="/project">Projet</Link>
      </p>
      <h1 className="border-4">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h1>{user.first_name}</h1>
          </li>
        ))}
      </ul>
    </>
  );
}
