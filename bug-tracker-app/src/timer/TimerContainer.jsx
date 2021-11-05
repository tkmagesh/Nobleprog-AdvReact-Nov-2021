import { useState } from 'react';
import Timer from './Timer'

const TimerContainer = () => {
    const [showTimer, setShowTimer] = useState(false);
    return(
        <div>
            <label>Show Timer : </label>
            <input type="checkbox" checked={showTimer} onChange={evt => setShowTimer(evt.target.checked)}/>
            {showTimer && <Timer/>}
        </div>
    )
}

export default TimerContainer;