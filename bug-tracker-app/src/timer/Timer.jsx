import useTimer from './useTimer';

const Timer = () => {
    const currentTime = useTimer();
    return (
        <div>
            <p>Current Time : {currentTime}</p>
        </div>
    )
}

export default Timer;