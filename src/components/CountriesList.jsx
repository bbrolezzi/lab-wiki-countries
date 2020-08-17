import React from 'react';
import { Link } from 'react-router-dom';
import countries from './../countries.json';

const CountriesList = () => {
  return (
    <div>
      <ul>
        <li>
          {countries.map((country) => (
            <Link key={country.cca3} to={`/countries/${country.cca3}`}>
              <p>
                {country.flag}
                {country.name.commom}
              </p>
            </Link>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default CountriesList;
