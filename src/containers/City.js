import React, { Component } from 'react';

class City extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            CityName : 'Surat'
        }
    }
    
    changeCity = () => {
        this.setState({
            CityName : 'Jamnagar'
        });
    }

    render() {
        return (
            <div>
                <p>{this.state.CityName}</p>
                <button onClick={() => this.changeCity()}>change city</button>
                <p>{this.props.id} {this.props.Country_Name}</p>
            </div>
        );
    }
}

export default City;