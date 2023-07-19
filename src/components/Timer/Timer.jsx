import { useState, useEffect } from "react";
import { TimerBox, TimeBox, Value, Indicator } from "./Timer.styled";
import { useSelector } from "react-redux";
import { calculateTime } from "../../services";

const Timer = () => {
  const startDate = useSelector((state) => state.startDate);
  const [timeLeft, setTimeLeft] = useState(calculateTime());
  console.log(startDate);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTime(startDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <>
      {!isNaN(timeLeft.days) && (
        <TimerBox>
          <TimeBox>
            <Value>{timeLeft.days}</Value>
            <Indicator>DAYS</Indicator>
          </TimeBox>
          <TimeBox>
            <Value>{timeLeft.hours}</Value>
            <Indicator>HOURS</Indicator>
          </TimeBox>
          <TimeBox>
            <Value>{timeLeft.minutes}</Value>
            <Indicator>MINUTES</Indicator>
          </TimeBox>
          <TimeBox>
            <Value>{timeLeft.seconds}</Value>
            <Indicator>SECONDS</Indicator>
          </TimeBox>
        </TimerBox>
      )}
    </>
  );
};

export default Timer;
