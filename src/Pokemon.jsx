import React, { useState, useEffect } from "react";
import "./style/style.scss";
import axios from "axios";
import Card from "./Card";

// import Card2 from "./Card2";

const Pokemon = () => {
  // For 1st Card
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [ranking, setRanking] = useState();
  const [move, setMove] = useState();
  const [type, setType] = useState();

  // For 2nd Card2
  const [image2, setImage2] = useState();
  const [name2, setName2] = useState();
  const [ranking2, setRanking2] = useState();
  const [move2, setMove2] = useState();
  const [type2, setType2] = useState();

  useEffect(() => {
    // Getting Data for 2nd Card
    async function getData() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${ranking}`
      );
      // console.log(res.data);
      setName(res.data.name);
      setMove(res.data.moves.length);
      setType(res.data.weight);
      setImage(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ranking}.png`
      );
    }
    getData();

    // Getting Data for 1nd Card
    async function getData2() {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${ranking2}`
      );
      // console.log(res.
      setName2(res.data.name);
      setMove2(res.data.moves.length);
      setType2(res.data.weight);
      setImage2(
        `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ranking2}.png`
      );
    }
    getData2();
  });

  var number = Array.from(Array(152).keys());

  const randomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
  };

  const getWinner = () => {
    if (move2 < move) {
      alert(`${name} is WINNER!`);
    } else if (move2 === move) {
      alert("It's a TIE!");
    } else if (((name || move) && (name2 || move2)) === undefined) {
      alert("please, First get you Card");
    } else {
      alert(`${name2} is WINNER!`);
    }
  };

  return (
    <div className="Pokemon-container">
      <Card
        id="Left-card"
        name={name2}
        image={image2}
        ranking={ranking2}
        move={move2}
        type={type2}
        onClick={(e) => {
          e.preventDefault();
          setRanking2(randomItem(number));
        }}
      />

      <button className="btn-fight" onClick={getWinner}>
        FIGHT
      </button>

      <Card
        id="Right-card"
        name={name}
        image={image}
        ranking={ranking}
        move={move}
        type={type}
        onClick={(e) => {
          e.preventDefault();
          setRanking(randomItem(number));
        }}
      />
    </div>
  );
};

export default Pokemon;
