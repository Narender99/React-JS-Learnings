import React, { useState } from "react";
import { Activites } from "./Activites";

export const Body = () => {
  const [userInput, setUserInput] = useState("");
  const [listOfActivites, setListOfActivites] = useState([]);

  const removeListOfActivites = (data) => {
    const result = listOfActivites.filter(item => item.name.trim() !== data.trim());
    setListOfActivites(result);
  }

  return (
    <div className="body">
      <div className="main-container">
        <div className="input-container">
          <label>Enter Your Daily Tasks:</label>
          <input
            className="input-field"
            type="text"
            value={userInput}
            onChange={(event) => {
              setUserInput(event.target.value);
            }}
            autoFocus
          ></input>
        </div>
        <div className="add-btn">
          <button
            onClick={() => {
              const tasks = {
                id: Math.random(),
                name: userInput,
              };
              setListOfActivites(listOfActivites.concat([tasks]));
              setUserInput('');
            }}
          >
            ADD
          </button>
        </div>
      </div>
            {listOfActivites.length > 0 && listOfActivites.map(activity => {
                return <Activites key={activity.id} data={activity.name} onRemoveActivity ={removeListOfActivites}/>
            })}
    </div>
  );
};
