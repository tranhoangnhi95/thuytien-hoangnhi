import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-04-12T09:00:00").getTime();

export default function useCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const [isFinished, setIsFinished] = useState(false);

    function getTimeRemaining() {
        const now = new Date().getTime();
        const distance = TARGET_DATE - now;

        if (distance <= 0) {
            setIsFinished(true);
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getTimeRemaining());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return { ...timeLeft, isFinished };
}