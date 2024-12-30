import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

/* Select element to choose from common pokemon. */
// add is a passed in function from the custom hook
function PokemonSelect({ addCard, pokemon = pokemonList }) {
  const [pokeIdx, setPokeIdx] = useState(0);
  const handleChange = evt => {
    setPokeIdx(Number(evt.target.value));
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      {/* Uses the function returned in the custon hook 
        * to add a new card*/}
      <button onClick={() => addCard(pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={() => addCard(choice(pokemon))}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect;
