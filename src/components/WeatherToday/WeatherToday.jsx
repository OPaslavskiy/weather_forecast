import { useSelector } from "react-redux";

import { getDayName } from "../../services";
import {
  Box,
  DayOfWeek,
  City,
  Temp,
  Celsii,
  Degrees,
} from "./WeatherToday.styled";

const WeatherToday = () => {
  const selectWeatherToday = (state) => state.weatherToday.items;
  let weatherToday = useSelector(selectWeatherToday).days;
  const city = useSelector(selectWeatherToday).address;

  if (weatherToday) {
    weatherToday = weatherToday[0];
  }

  return (
    <Box>
      <DayOfWeek>{getDayName(weatherToday?.datetime)}</DayOfWeek>
      <img src={weatherToday?.icon} alt="" />
      <Temp>
        {Math.floor(weatherToday?.temp)}
        <Degrees>°</Degrees>
        <Celsii>C</Celsii>
      </Temp>

      <City>{city}</City>
    </Box>
  );
};

export default WeatherToday;
