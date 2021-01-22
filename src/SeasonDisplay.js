import './SeasonDisplay.css';
import React from 'react';

// configuración inicial de los objetos dependiende de que epoca del año sea.

const seasonConfig = {
  summer: {
    text: '¡Verano / Primavera!',
    iconName: 'sun',
  },
  winter: {
    text: '¡Invierno / Otoño!',
    iconName: 'snowflake',
  },
};

// se define que epoca del año es utilizando la funcionalidad integrada a el navegador
// de geolocalización

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // {text, iconName}

  // Se utiliza templeta literals para interpolar una variable en el campo de string.

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
