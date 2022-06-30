import "./feuille.css";
import { useState, useEffect } from "react";
import papa from "papaparse";
import FirstFeuille from "./FirstFeuille";
import "./note.css";

export default function PageList() {
  const [avatar, setAvatar] = useState([]);

  const prepareDataForAvatar = (data) => {
    const keys = data.shift();
    const json = data.map((line) => {
      let obj = {};
      // eslint-disable-next-line no-return-assign
      keys.forEach((key, j) => (obj = { ...obj, [key]: line[j] }));
      return obj;
    });
    setAvatar(json);
  };
  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQY3Rio8jsE6Z3EQYlbtIBZmP8EiE7w3MqUlveAmHicNSWUmOi1MqvS4EJG9DmQmvpfku4JXBKwwbkP/pub?output=csv"
    )
      .then((res) => res.text())
      .then((text) => papa.parse(text))
      .then((data) => prepareDataForAvatar(data.data));
  }, []);
  return (
    <div className="flex gap-x-24 overflow-x-auto pl-8">
      <FirstFeuille />
      <FirstFeuille />
      <div className="flex flex-col">
        <div className="paper">
          <div className="pin">
            <div className="shadow" />
            <div className="metal" />
            <div className="bottom-circle" />
          </div>
          <p> 5 🔥</p>
          <div className="flex flex-col p-8">
            <p>Super Projet !!!</p>
            <p>01 Juillet 2022</p>
          </div>
          <p>
            {avatar.splice(0, 1).map((user) => (
              <div className="flex flex-col">
                <img src={user.avatar} alt="avatar" />
                <p className="text-center">{user.first_name}</p>
                <p className="text-center">{user.last_name}</p>
              </div>
            ))}
          </p>
        </div>

        <div className="paper1">
          <div className="pin1">
            <div className="shadow" />
            <div className="metal" />
            <div className="bottom-circle" />
          </div>
          <p className=""> 3 🔥</p>
          <div className="flex flex-col p-8">
            <p>Cool Vraiment top 🙂 </p>
            <p>30 Juin 2022</p>
          </div>
          <p>
            {avatar.splice(0, 1).map((user) => (
              <div className="flex flex-col">
                <img src={user.avatar} alt="avatar" />
                <p className="text-center">{user.first_name}</p>
                <p className="text-center">{user.last_name}</p>
              </div>
            ))}
          </p>
        </div>

        <div className="paper">
          <div className="pin">
            <div className="shadow" />
            <div className="metal" />
            <div className="bottom-circle" />
          </div>
          <p> 2 🔥</p>

          <div className="flex flex-col p-8">
            <p>J'adore 🧡 </p>
            <p>29 Juin 2022</p>
          </div>
          <p>
            {avatar.splice(0, 1).map((user) => (
              <div className="flex flex-col">
                <img src={user.avatar} alt="avatar" />
                <p className="text-center">{user.first_name}</p>
                <p className="text-center">{user.last_name}</p>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}
