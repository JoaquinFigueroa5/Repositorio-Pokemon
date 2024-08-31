import React from "react";

export const ContenedorPokemon = ({ iPokemon }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {Array.isArray(iPokemon) && iPokemon.length > 0(
        iPokemon.map(({ nombre, nombreHabilidad, url }, index) => (
          <React.Fragment key={index}>
            <img src={url} className="card-img-top" alt={nombre} />
            <div className="card-body">
              <h5 className="card-title">{nombre}</h5>
              <p className="card-text">
                <strong>Habilidad:</strong> {nombreHabilidad}
              </p>
            </div>
          </React.Fragment>
        ))
      )}
    </div>
  );
};
