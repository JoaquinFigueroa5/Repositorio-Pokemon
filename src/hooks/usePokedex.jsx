import { useState } from "react"
import { reqPokemon } from "../service/pokedex"

export const usePokedex = () => {
    const [iPokedex, setIPokedex] = useState([])

    const handleGetPokemon = async(pokemon, e) =>{
        e.preventDefault()

        await reqPokemon(pokemon).then((iPokedex) => {
            setIPokedex(iPokedex)
        })
    }

    return {
        handleGetPokemon,
        iPokedex
    }

}