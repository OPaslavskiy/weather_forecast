import { getDayName } from "../../services/getDayName";

// eslint-disable-next-line react/prop-types
const WeatherForDay = ({ props: { datetime, icon, tempmax, tempmin } }) => {
  const dayName = getDayName(datetime);

  return (
    <li>
      <p>{dayName}</p>
      <img src={icon} alt="" />
      <p>
        {Math.floor(tempmax) + "°"}/{Math.floor(tempmin) + "°"}
      </p>
    </li>
  );
};

export default WeatherForDay;
