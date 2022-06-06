import React, { Component } from 'react';
import City from './containers/City';
import CityFun from './containers/CityFun';
import Country from './containers/Country';
import CountryFun from './containers/CountryFun';
import Time from './containers/Time/Time';

class App extends Component {
  render() {
    return (
      <div>
        {/* <City />
        <CityFun />
        <Country />
        <CountryFun /> */}
        <Time />
      </div>
    );
  }
}



export default App;