import React, { useState } from "react";
import image from "../images/office-push-pin.png";

export const Activites = ({ data , onRemoveActivity}) => {
  const [editedData, setEditedData] = useState(data);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Edit");

  const handleEdit = (name) => {
    if (name.toLowerCase() === "edit") {
      setIsEditing(true);
      setName("Cancel");
    } else {
      setIsEditing(false);
      setName("Edit");
    }
  };

  return (
    <div className="activities">
      <div className="list-items">
        <div className="item">
          <div className="image-container">
            <img src={image} alt="pin_image" className="image" />
          </div>
          {isEditing ? (
            <input
              type="text"
              autoFocus
              value={editedData}
              onChange={(event) => {
                setEditedData(event.target.value);
              }}
              
            />
          ) : (
            <div>{editedData}</div>
          )}
        </div>
        {isEditing && (
          <div className="save-item">
            <h3
              onClick={() => {
                setIsEditing(false);
                setName('Edit');
              }}
            >
              Save
            </h3>
          </div>
        )}
      </div>
      <button
        className="edit-item"
        onClick={() => {
          handleEdit(name);
        }}
      >
        {name}
      </button>
      <button className="delete-item" onClick={()=> {
        onRemoveActivity(editedData);
      }}>Delete</button>
    </div>
  );
};
