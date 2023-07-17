import { useSelector } from "react-redux";
import WeatherForDay from "../WeatherForDay/WeatherForDay";

const WeatherTimeBox = () => {
  const selectWeather = (state) => state.weatherTime.items.days;
  const weatherForDays = useSelector(selectWeather);
  // console.log(`weather=====>>>>`, weatherForDays);

  return (
    <div>
      <ul>
        {weatherForDays?.map((day) => (
          <WeatherForDay key={day.datetime} props={day} />
        ))}
      </ul>
    </div>
  );
};

export default WeatherTimeBox;
