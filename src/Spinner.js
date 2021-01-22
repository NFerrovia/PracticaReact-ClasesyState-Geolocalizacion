import React from 'react';

// creación de un Spinner de error a travez de semantic UI, mientras
// el usuario decide si aceptar o no la solicitud.

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Cargando...',
};

export default Spinner;
