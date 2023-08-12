import React from "react";
import { Link } from "react-router-dom";
import "./Entity.css";

const Entity = ({ name, img, level, category }) => {
  return (
    <div className="entity">
      <img src={img} alt={name} />
      <Link to={`${name}`}>
        <div className="info">
          <h2>{name}</h2>
          <p>Level: {level}</p>
          <h2>Description</h2>
        </div>
      </Link>
    </div>
  );
};

export default Entity;
