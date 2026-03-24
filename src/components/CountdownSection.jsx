import useCountdown from "./useCountdown";
import FlipCountdown from "./FlipCountdown";

export default function CountdownSection() {
    const { days, hours, minutes, seconds, isFinished } = useCountdown();
    return (
        <FlipCountdown
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            isFinished={isFinished}
        />
    );
}