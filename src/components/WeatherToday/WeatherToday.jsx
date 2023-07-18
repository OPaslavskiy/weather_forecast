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
import { icons } from "../../iconForWeather/index";

const WeatherToday = () => {
  const selectWeatherToday = (state) => state.weatherToday.items;
  let weatherToday = useSelector(selectWeatherToday).days;
  const city = useSelector(selectWeatherToday).address;
  console.log(weatherToday);

  if (weatherToday) {
    weatherToday = weatherToday[0];
  }

  return (
    <Box>
      <DayOfWeek>{getDayName(weatherToday?.datetime)}</DayOfWeek>
      {icons.map((icon) => {
        if (icon.icon === weatherToday?.icon)
          return <img src={icon.path} alt={weatherToday?.icon} />;
      })}

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
