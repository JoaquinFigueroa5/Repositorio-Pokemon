import { useState } from "react"
import { usePokedex } from "../hooks/usePokedex"
import { BuscarPokemon } from "./BuscarPokemon"
import { ContenedorPokemon } from "./ContenedorPokemon"

export const PokedexApp = () => {
    const {handleGetPokemon, arregloPokedex} = usePokedex()

    return (
        <>
        <BuscarPokemon handleGetPokemon={handleGetPokemon}/>
        <ContenedorPokemon arregloPokedex={arregloPokedex}/>
        </>
    )
}