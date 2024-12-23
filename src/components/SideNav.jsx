import React, { useState } from "react";
import { first151Pokemon, getFullPokedexNumber } from "../utils";
const SideNav = (props) => {
  const {
    selectedPokemon,
    setSelectedPokemon,
    handleCloseMenu,
    showSideMenu,
  } = props;
  const [searchValue, setSearchValue] = useState("");
  const filteredPokemon = first151Pokemon.filter((ele, eleindex) => {
    if (getFullPokedexNumber(eleindex).includes(searchValue)) {
      return true;
    }

    if (ele.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }

    return false;
  });
  return (
    <nav className={" "+(!showSideMenu ? "open" : " ")}>
      <div className={"header" + (!showSideMenu ? " open" : " ")}>
        <button onClick={handleCloseMenu} className="open-nav-button">
          <i className="fa-solid fa-arrow-left-long"></i>
        </button>
        <h1 className="text-gradient">Pokédex</h1>
      </div>

      <input
        placeholder="E.g  001 or Bulbasaur"
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />

      {filteredPokemon.map((pokemon, pokemonindex) => {
        const truePokedexNumber = first151Pokemon.indexOf(pokemon);

        return (
          <button
            onClick={() => {
              setSelectedPokemon(truePokedexNumber);
            }}
            className={
              "nav-card" +
              (pokemonindex === selectedPokemon ? " nav-card-selected" : "")
            }
            key={pokemonindex}
          >
            <p>{getFullPokedexNumber(truePokedexNumber)}</p>
            <p>{pokemon}</p>
          </button>
        );
      })}
    </nav>
  );
};

export default SideNav;
