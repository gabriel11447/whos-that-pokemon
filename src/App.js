import "./reset.css";
import "./App.css";
import { Fragment } from "react";

import fetchData from './services/api';

function getRandomId() {
  return Math.floor(Math.random() * 893) + 1;
}

async function handleButton(value) {
  const typedPokemonId = await fetchData(value);
  if (typedPokemonId == generatedId) {
    console.log("acerotu")
    document.getElementById('pokemon-image').classList.add('discovered');
  }
}

const generatedId = getRandomId()

export default function App() {
  return (
    <Fragment>
      <header>
          <input type="text" id="search" name="search" class="search" placeholder=" Who's that Pokémon?" />
          <button onClick={() => handleButton(`${document.getElementById('search').value}`)} className="btn">Confirmar</button>
      </header>
      <a className="card" >
          <img id="pokemon-image" style={{filter: "brightness(0%)"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${generatedId}.png`} alt="pokemon" />
      </a>
    </Fragment>
  );
}