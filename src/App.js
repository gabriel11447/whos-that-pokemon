import "./reset.css";
import "./App.css";
import { Fragment } from "react";

export default function App() {
  return (
    <Fragment>
      <header>
          <input type="search" id="search" name="search" class="search" placeholder=" Who's that Pokémon?" />
      </header>
      <a className="card" >
          <img style={{filter: "brightness(0%)"}} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="pokemon" />
      </a>
    </Fragment>
  );
}