import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountriesDetails from './components/CountriesDetails';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <CountriesList />
        <Switch>
          <Route path="/countries/:cca3" component={CountriesDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
