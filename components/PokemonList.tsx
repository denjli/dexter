import React from "react";
import SinglePokemon from "./SinglePokemon";

function PokemonList() {
  return (
    <div className="container grid p-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
      <SinglePokemon />
      <SinglePokemon />
      <SinglePokemon />
      <SinglePokemon />
      <SinglePokemon />
      <SinglePokemon />
    </div>
  );
}

export default PokemonList;
