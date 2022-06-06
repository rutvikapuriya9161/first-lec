import React, { useState } from 'react';

function CityFun({id, Country_Name}) {

    const[CityName, setCityName] = useState('Surat');

    const changeCity = () => {
        setCityName('Jamnagar');
    }
    
    return (
        <div>
            <p>{CityName}</p> 
            <button onClick={() => changeCity()}>Change City</button>
            <p>{id} {Country_Name}</p>
        </div>
    );
}

export default CityFun;