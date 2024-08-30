import { useState } from "react"
import { reqPokemon } from "../service/pokedex"

export const usePokedex = () => {
    const [arregloPokedex, setArregloPokedex] = useState([])

    const handleGetPokemon = async(pokemon, e) =>{
        e.preventDefault()

        await reqPokemon(pokemon).then((arregloPokedex) => {
            setArregloPokedex(arregloPokedex)
        })
    }

    return {
        handleGetPokemon,
        arregloPokedex
    }

}