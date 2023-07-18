import { useSelector } from "react-redux";

import { getDayName } from "../../services";
import { Box } from "./WeatherToday.styled";

const WeatherToday = () => {
  const selectWeatherToday = (state) => state.weatherToday.items;
  let weatherToday = useSelector(selectWeatherToday).days;
  const city = useSelector(selectWeatherToday).address;

  if (weatherToday) {
    weatherToday = weatherToday[0];
  }

  return (
    <Box>
      <p>{getDayName(weatherToday?.datetime)}</p>
      <img src={weatherToday?.icon} alt="" />
      <p>{Math.floor(weatherToday?.temp) + "°"}</p>
      <p>{city}</p>
    </Box>
  );
};

export default WeatherToday;
