import React, { Component } from 'react';
import City from './containers/City';
import CityFun from './containers/CityFun';
import Country from './containers/Country';
import CountryFun from './containers/CountryFun';
import Time from './containers/Time/Time';
import TimeFun from './containers/Time/TimeFun';
import IncDecCounter from './containers/Counter';

// class Time extends Component {

//     constructor(props) {
//         super(props);

//         // 1.used to set initial value to the component

//         this.state = {
//             time: new Date()
//         }
//     }

//     tick = () => {
//         this.setState({
//             time: new Date()
//         })
//     }

//     componentDidMount = () => {

//         // 3.used to request data from server
//         this.timeI = setInterval(() => this.tick(), 1000);
//     }

//     componentDidUpdate = (PrevProps, PrevState) =>{

//         // 4. called whenever particular state/props update
//         if(this.state.time !== PrevState.time) {
//             console.log("componentDidUpdate");
//         }
//     }

//     componentWillUnmount = () => {

        // 5. called whenever we move to another component (used to realse the resourse)
//         clearInterval(this.timeI);
//     }

//   render() {
//     return (
//       <div>
//           <p>{this.state.time.toLocaleTimeString()}</p>
//       </div>
//     );
//   }
// }

// export default Time;



// import React, { useEffect, useState } from 'react';

// function TimeFun(props) {

//     const[time, setTime] = useState(new Date());

//     const tick = () => {
//         setTime(new Date());
//     }

//     useEffect(() => {
//         // componentDidMount, componentDidUpdate
//         const timeI = setInterval(() => tick(), 1000);

//         //coponentWillUnmount
//         return() => {
//             clearInterval(timeI);
//         }
//     }, [time]);
    
//     return (
//         <div>
//             <p>{time.toLocaleTimeString()}</p> 
//         </div>
//     );
// }

// export default TimeFun;

class App extends Component {
  render() {
    return (
      <div>
        {/* <City /> */}
        {/* <CityFun /> */}
        {/* <Country /> */}
        {/* <CountryFun /> */}
        {/* <Time /> */}
        {/* <TimeFun /> */}
        <IncDecCounter />
      </div>
    );
  }
}



export default App;