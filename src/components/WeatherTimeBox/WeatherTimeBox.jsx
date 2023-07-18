import { useSelector } from "react-redux";
import WeatherForDay from "../WeatherForDay/WeatherForDay";
import { ListWeather } from "./WeatherTimeBox.styled";
import { nanoid } from "nanoid";

const WeatherTimeBox = () => {
  const selectWeather = (state) => state.weatherTime.items.days;
  const weatherForDays = useSelector(selectWeather);

  return (
    <ListWeather>
      {weatherForDays?.map((day) => (
        <WeatherForDay key={nanoid()} props={day} />
      ))}
    </ListWeather>
  );
};

export default WeatherTimeBox;
