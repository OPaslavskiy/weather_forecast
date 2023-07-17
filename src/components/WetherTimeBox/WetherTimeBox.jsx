import { useSelector } from "react-redux";
import WetherForDay from "../WetherForDay/WeatherForDay";

const WetherTimeBox = () => {
  const selectWeather = (state) => state.weatherTime.items.days;
  const weatherForDays = useSelector(selectWeather);
  console.log(`weather=====>>>>`, weatherForDays);

  return (
    <div>
      <ul>
        {weatherForDays?.map((day) => (
          <WetherForDay key={day.datetime} props={day} />
        ))}
      </ul>
    </div>
  );
};

export default WetherTimeBox;
