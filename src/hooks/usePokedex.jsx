import { useState } from "react"
import { reqPokemon } from "../service/pokedex"

export const usePokedex = () => {
    const [iPokedex, setIPokedex] = useState(null)

    const handleGetPokemon = async (pokemon, e) => {
        e.preventDefault()

        const result = await reqPokemon(pokemon)
        setIPokedex(result)
    };

    return {
        handleGetPokemon,
        iPokedex
    };
};
