import React, { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PokemonCard from './Components/PokemonCard/PokemonCard';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
function App() {
  const [pokemon, setPokemon] = useState({
    name: "Pichu",
    type: "Electric",
    evolved: false,
    weight: 2,
    color: 'yellow',
    image: 'https://archives.bulbagarden.net/media/upload/thumb/b/b9/172Pichu.png/250px-172Pichu.png',
    id: 0
  })

  const [pokemon2, setPokemon2] = useState({
    name: "Pitchur",
    type: "Roça",
    evolved: false,
    weight: 80,
    color: 'darkred',
    image: 'https://www.campeoesdofutebol.com.br/imagens/xv_piracicaba_mascote.jpg',
    id: 0
  })

  const Evoluir = () => {
    const novoPokemon = { 
      ...pokemon, 
      name: "Pichu-Spiked",
      image:  "https://archives.bulbagarden.net/media/upload/thumb/6/6b/025Pikachu-Gigantamax.png/240px-025Pikachu-Gigantamax.png"}

    setPokemon(novoPokemon)
  }

  const Evoluir2 = () => {
    const novoPokemon = { 
      ...pokemon2, 
      name: "PokeBãoo",
      weight: 130,
      image:  "http://3.bp.blogspot.com/_W6uhoujUJfc/SpxDBo9KFXI/AAAAAAAAA_s/2oaLMENnIfg/s400/xv_pirac.gif"}

    setPokemon2(novoPokemon)
  }



  // Para fazer seus próximos pokemons, crie novos estados!

  return (<>
    <GlobalStyles />
    <FlexContainer>

      <PokemonCard
        name={pokemon.name}
        type={pokemon.type}
        evoluirPokemon={Evoluir}
        weight={pokemon.weight}
        color={pokemon.color}
        image={pokemon.image}

      />

      <PokemonCard
        name={pokemon2.name}
        type={pokemon2.type}
        evoluirPokemon={Evoluir2}
        weight={pokemon2.weight}
        color={pokemon2.color}
        image={pokemon2.image}

      />

    </FlexContainer>
  </>

  );
}

export default App;
