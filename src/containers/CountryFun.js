import React, { useState } from 'react';
import CityFun from './CityFun';

function CountryFun(props) {

    const[CountryName, setCountryName] = useState('India');

    const changeCountry = () => {
        setCountryName('US');
    }
    
    return (
        <div>
            <p>{CountryName}</p> 
            <button onClick={() => changeCountry()}>Change Country</button>
            <CityFun id="101" Country_Name = {CountryName} />
        </div>
    );
}

export default CountryFun;