import { useSelector } from "react-redux";
import WeatherForDay from "../WeatherForDay/WeatherForDay";
import { ListWeather } from "./WeatherTimeBox.styled";

const WeatherTimeBox = () => {
  const selectWeather = (state) => state.weatherTime.items.days;
  const weatherForDays = useSelector(selectWeather);

  return (
    <ListWeather>
      {weatherForDays?.map((day) => (
        <WeatherForDay key={day.datetime} props={day} />
      ))}
    </ListWeather>
  );
};

export default WeatherTimeBox;
