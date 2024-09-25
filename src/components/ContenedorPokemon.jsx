import React from "react";

export const ContenedorPokemon = ({ iPokedex }) => {
  if (!iPokedex) return null

  const { nombre, nombreHabilidad, url } = iPokedex

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card" style={{ width: '18rem' }}>
        <img src={url} className="card-img-top" alt={nombre} />
        <div className="card-body">
          <h5 className="card-title">{nombre}</h5>
          <p className="card-text">
            <strong>Habilidad:</strong> {nombreHabilidad}
          </p>
        </div>
      </div>
    </div>  
  );
};
