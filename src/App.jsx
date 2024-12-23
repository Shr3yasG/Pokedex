import React from 'react'
import Header from './components/Header'
import SideNav from './components/SideNav'
import PokeCard from './components/PokeCard'

import { useState } from 'react'
const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(0)

  const [showSideMenu, setShowSideMenu] = useState(true) // this does the opposite of what it should do (ie, when showSideMenu it true, it's actually false)

  function handleToggleMenu() {
    setShowSideMenu(!showSideMenu)
  }

  function handleCloseMenu() {
    setShowSideMenu(true)
  }
  return (
    <>
      <Header handleToggleMenu={handleToggleMenu}/>
      <SideNav 
        selectedPokemon={selectedPokemon} 
        setSelectedPokemon={setSelectedPokemon} 
        handleCloseMenu={handleCloseMenu} 
        showSideMenu={showSideMenu}/>
      <PokeCard selectedPokemon={selectedPokemon}/> 
    </>
  )
}

export default App