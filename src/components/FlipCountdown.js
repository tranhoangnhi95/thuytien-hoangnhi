import React, { useEffect, useState } from "react";

// const targetDate = new Date("2026-04-12T00:00:00");
//
// function getTimeRemaining() {
//     const total = targetDate - new Date();
//
//     const seconds = Math.floor((total / 1000) % 60);
//     const minutes = Math.floor((total / 1000 / 60) % 60);
//     const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//     const days = Math.floor(total / (1000 * 60 * 60 * 24));
//
//     return { days, hours, minutes, seconds };
// }

export default function FlipCountdown({ days, hours, minutes, seconds, isFinished }) {
    // const [time, setTime] = useState(getTimeRemaining());
    //
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setTime(getTimeRemaining());
    //     }, 1000);
    //
    //     return () => clearInterval(timer);
    // }, []);

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