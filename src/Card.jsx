import React from "react";

const Card = ({ id, image, name, ranking, move, type, onClick }) => {
  return (
    <div className="Card-container" id={id}>
      <div className="Image-container">
        <img src={image} alt="Tap in GET button to get you CARD" />
      </div>
      <div className="Name-container">
        <h3>Name: {name}</h3>
        <h3>Ranking: {ranking}</h3>
        <h3>Moves: {move}</h3>
        <h3>Weight: {type}</h3>

        <button className="btn-card" onClick={onClick}>
          GET
        </button>
      </div>
    </div>
  );
};

export default Card;
