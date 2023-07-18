import { useState, useEffect } from "react";
import { TimerBox, TimeBox, Value, Indicator } from "./Timer.styled";
import { useSelector } from "react-redux";

const Timer = () => {
  const calculateTimeLeft = () => {
    const difference = new Date() - new Date();
    if (difference < 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
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
  );
};

export default Timer;
