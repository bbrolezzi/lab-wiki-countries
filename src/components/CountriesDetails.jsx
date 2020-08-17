import React, { Component } from 'react';
import countries from './../countries.json';

class CountriesDetails extends Component {
  constructor() {
    super();
    this.state = {
      country: null,
    };
  }

  componentDidMount() {
    this.loadCountry();
  }

  componentDidUpdate(previousProps, previousState) {
    if (previousProps.match.params.cca3 !== this.props.match.params.cca3) {
      this.loadCountry();
    }
  }

  loadCountry() {
    const cca3 = this.props.match.params.cca3;
    const country = countries.find((item) => item.cca3 === cca3);
    this.setState({
      country,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Olá Mundo</h1>
      </div>
    );
  }
}
export default CountriesDetails;
