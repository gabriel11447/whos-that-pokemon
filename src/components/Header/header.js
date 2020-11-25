import React, { useState } from 'react'

import fetchData from '../../services/api';

async function handleButton(value, id) {
    const typedPokemonId = await fetchData(value);
    if (typedPokemonId === id) {
        document.getElementById('pokemon-image').classList.add('discovered');
    }
}

export default function Header({ generatedId }) {
    const [pokemon, setPokemon] = useState("");

    return (
        <header>
            <input onChange={event => setPokemon(event.target.value)} type="text" id="search" name="search" className="search" placeholder=" Who's that Pokémon?" />
            <button onClick={() => handleButton(pokemon.toLowerCase(), generatedId)} className="btn">Confirmar</button>
        </header>
    );
}