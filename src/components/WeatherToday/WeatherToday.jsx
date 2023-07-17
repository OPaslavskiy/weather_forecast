import { useSelector } from "react-redux";

import { getDayName } from "../../services";

const WeatherToday = () => {
  const selectWeatherToday = (state) => state.weatherToday.items.days;
  // console.log(`selectWeatherToday=====>>>>`, selectWeatherToday);
  let weatherToday = useSelector(selectWeatherToday);
  // console.log(`weather=====>>>>`, weatherToday);

  if (weatherToday) {
    weatherToday = weatherToday[0];
  }

  return (
    <div>
      <p>{getDayName(weatherToday?.datetime)}</p>
      <img src={weatherToday?.icon} alt="" />
      <p>{Math.floor(weatherToday?.temp) + "°"}</p>
    </div>
  );
};

export default WeatherToday;
