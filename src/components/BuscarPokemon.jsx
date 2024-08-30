import React from "react"
import { useState } from "react"

export const BuscarPokemon = ({handleGetPokemon}) => {
    const[pokemon, setPokemon] = useState('')

    return (
        <>
        <div className="container d-flex flex-row justify-content-center alig-items-center mt-3 w-50" style={{padding: '10px'}}>
            <form className="d-flex" onSubmit={(e) => {handleGetPokemon(pokemon, e)}}>
            <input type="text" onChange={(e) => {setPokemon(e.target.value)}}/>
            <input className="btn btn-dark" type="submit" value="Buscar Pokemon" />
            </form>
        </div>
        </>
    )
}