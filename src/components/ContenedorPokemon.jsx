import React from "react"
import { useState } from "react"
import { usePokedex } from "../hooks/usePokedex"
import 'bootstrap/dist/css/bootstrap.min.css'

export const ContenedorPokemon = ({arregloPokemon}) => {
  return (
    <div className="card">
        {arregloPokemon.map(({name, nameAbility, efect, url})=>{
            return(
                <>
                    <img src={url} className="card-img-top"/>
                    <div className="card-body">
                        <p className="card-text"></p>
                    </div>
                </>
            )
        })}
        
    </div>
  )
}
