import { useState, useEffect } from 'react';

function useTimer(){
    const [currentTime, setCurrentTime ] = useState(Date())
    
    useEffect(() => {
        //this function is executed whenever the component is initialized / updated
        const timerId = setInterval(() => {
            setCurrentTime(Date())
        }, 1000);
        return () => {
            //this function is executed when the component is unmounted
            console.log('timer unmounted (clearing the timerId)')
            clearInterval(timerId);
        }
    }, [] /* dependencies when changed we want the outer function to be executed */)
    return currentTime;
}

export default useTimer;