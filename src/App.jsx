import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style/style.scss";

const App = () => {
  const [num, setNum] = useState();
  const [name, setName] = useState();
  const [move, setMove] = useState();
  useEffect(() => {
    // alert("Hi");
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/`);
      console.log(res.data);
      setName(res.data.name);
      setMove(res.data.moves.length);
    }
    getData();
  });
  return (
    <div>
      <h1>Pokemon</h1>
      <h1>
        You Chose <span style={{ color: "red" }}>{num}</span> Value
      </h1>
      <h1>
        My name is <span style={{ color: "red" }}>{name}</span>
      </h1>
      <h1>
        I have <span style={{ color: "red" }}>{move}</span> moves
      </h1>
      <select
        value={num}
        onChange={(e) => {
          setNum(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="25">25</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="6">6</option>
      </select>
    </div>
  );
};

export default App;
