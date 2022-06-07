import React, { useEffect, useState } from 'react';

function TimeFun(props) {

    const[time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }

    useEffect(() => {
        // componentDidMount, componentDidUpdate
        const timeI = setInterval(() => tick(), 1000);

        //coponentWillUnmount
        return() => {
            clearInterval(timeI);
        }
    }, [time]);
    
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p> 
        </div>
    );
}

export default TimeFun;