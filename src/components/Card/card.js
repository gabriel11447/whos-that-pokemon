import React from 'react'

export default function Card({ generatedId }) {
    return(
    <a href="/" className="card" >
        <img id="pokemon-image" style={{filter: "brightness(0%)"}} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${generatedId}.png`} alt="pokemon" />
    </a>
    );
}
