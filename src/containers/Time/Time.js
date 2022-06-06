import React, { Component } from 'react';

class Time extends Component {

    constructor(props) {
        super(props);

        // 1.used to set initial value to the component

        this.state = {
            time: new Date()
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }

    componentDidMount = () => {

        // 3.used to request data from server
        this.timeI = setInterval(() => this.tick(), 1000);
    }

    componentDidUpdate = (PrevProps, PrevState) =>{

        // 4. called whenever particular state/props update
        if(this.state.time !== PrevState.time) {
            console.log("componentDidUpdate");
        }
    }

    componentWillUnmount = () => {

        // 5. called whenever we move to another component (used to realse the resourse)
        clearInterval(this.timeI);
    }

  render() {
    return (
      <div>
          <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Time;