import Navbar from "@components/Navbar";

import { useState, useEffect } from "react";
import papa from "papaparse";
import "./Frame.css";

export default function MyAgence() {
  const [users, setUsers] = useState([]);

  const prepareDataForUsers = (data) => {
    const keys = data.shift();
    const json = data.map((line) => {
      let obj = {};
      // eslint-disable-next-line no-return-assign
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
    <div className="flex ">
      <Navbar />
      <div className="flex flex-col items-center ">
        <img
          src="https:picsum.photos/id/10/200/200"
          alt="pellenc-agence-pellenc-1"
          className="w-28 h-38 rounded-full m-4"
        />
        <h1 className=" text-2xl ">Paris 🥐</h1>
        <p className="m-1 p-4 text-sm text-center font-light">
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié.
        </p>
        <div>
          <h1 className="text-center text-2xl">Employés du mois 🥇</h1>
          <ul className="flex justify-evenly m-2 ">
            {users
              .filter((user) => user.last_name === "Binder")
              .slice(0, 3)
              .map((user) => (
                <li className=" flex flex-col w-52 h-52  ">
                  <div className="container">
                    <div className="frame">
                      <div className="frame__in">
                        <img
                          src={user.avatar}
                          // Jaffou est passer par la
                          alt="il est pas là pour enfiler des perles "
                          className="w-10 h-10 ml-14 mb-2 rounded-full"
                        />
                        <p className="text-sm text-center">{user.first_name}</p>
                        <p className="text-sm text-center">
                          {" "}
                          {user.profession}
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>

          <h1 className="text-2xl text-center m-3"> Notre équipe 🇫🇷 !</h1>
          <ul className="flex flex-row  justify-center flex-wrap m-2  ">
            {users.slice(0, 25).map((user) => (
              <li
                key={user.id}
                className="m-3 hovertext"
                data-hover={`${user.first_name} ${user.last_name}`}
              >
                <img src={user.avatar} alt="avatar" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
