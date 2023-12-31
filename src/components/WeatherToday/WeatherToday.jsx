import { useSelector } from "react-redux";

import { getDayName } from "../../services";
import {
  Box,
  DayOfWeek,
  City,
  Temp,
  Celsii,
  Degrees,
  WeatherBox,
} from "./WeatherToday.styled";
import { icons } from "../../iconForWeather/index";
import { nanoid } from "nanoid";

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
      <WeatherBox>
        {icons.map((icon) => {
          if (icon.icon === weatherToday?.icon)
            return (
              <img
                key={nanoid()}
                src={icon.path}
                alt={weatherToday?.icon}
                width={110}
              />
            );
        })}
      </WeatherBox>
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
