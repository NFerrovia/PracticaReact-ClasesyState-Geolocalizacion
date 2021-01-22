import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // inicialización de mensaje de error.

  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // se utiliza setState para actualizar el state dentro de el componente de clase,
      // en vez de hacer: this.state.lat = position.coords.latitude

      (position) => this.setState({ lat: position.coords.latitude }),

      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    // inicialización que toma lugar en diferentes casos de que el usuario esté bloqueando
    // la solicitud de geolocalización o no.

    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage} </div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return (
      <Spinner message="Para continuar, acepte la solicitud de geolocalización" />
    );
  }
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
