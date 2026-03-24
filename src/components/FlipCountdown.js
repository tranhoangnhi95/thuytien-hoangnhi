import React, { useEffect, useState } from "react";


export default function FlipCountdown({ days, hours, minutes, seconds, isFinished }) {

    return (
        <div className="countdown">

            <FlipUnit label="Ngày" value={isFinished ? "Kỷ" : days} isFinished={isFinished}/>
            <FlipUnit label="Giờ" value={isFinished ? "niệm" : hours} isFinished={isFinished} />
            <FlipUnit label="Phút" value={isFinished ? "ngày" : minutes} isFinished={isFinished} />
            <FlipUnit label="Giây" value={isFinished ? "cưới" : seconds} isFinished={isFinished} />

        </div>
    );
}

function FlipUnit({value, label, isFinished}) {

    const [display, setDisplay] = useState(value);
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        if (value !== display) {
            setFlip(true);

            setTimeout(() => {
                setDisplay(value);
                setFlip(false);
            }, 300);
        }
    }, [value]);

    return (
        <div className="countdown-item">

            <div className={`flip-card ${flip ? "flip" : ""}`}>
                <span className="top">{display}</span>
            </div>
            <span className="countdown-label" style={{visibility: isFinished ? "hidden" : true}}  hidden={isFinished}>{label}</span>

        </div>
    );
}