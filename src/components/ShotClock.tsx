import React, {useEffect, useState} from 'react'

const DEFAULT_TIME = 24;

function ShotClock() {
    const [seconds, setSeconds] = useState(DEFAULT_TIME);
    const [isStart, setStart] = useState(false);
    
    function resetClock() {
        setSeconds(DEFAULT_TIME);
        setStart(false);
    }

    function handleToggleClock() {
        setStart(!isStart);
    }

    useEffect(() => {
        if(seconds < 0) {
            resetClock();
            return;
        }
        let intervalId = setInterval(() => {
            if(isStart) setSeconds(seconds - 1);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [isStart, seconds])

    return (
        <div className="container">
            <div className="clock-wrapper">
                <div className="digital-text text-9xl">{seconds}</div>
            </div>
            <div className="button-wrapper">
                <button className="p-2" onClick={handleToggleClock}>{!isStart ? 'START' : 'STOP'}</button>
                <button className="p-2" onClick={resetClock}>RESET</button>
            </div>
        </div>
    )
}

export default ShotClock;