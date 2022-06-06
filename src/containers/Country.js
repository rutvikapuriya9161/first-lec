import React, { Component } from 'react';

class Country extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            CountryName : 'India'
        }
    }
    
    changeCountry = () => {
        this.setState({
            CountryName : 'US'
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.CountryName}</p>
                <button onClick={() => this.changeCountry()}>change Country</button>
                <city id="101" country_Name = {this.state.CountryName} />
            </div>
        );
    }
}

export default Country;