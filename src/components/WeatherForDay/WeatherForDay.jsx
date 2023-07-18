import { getDayName } from "../../services";
import { DayOfWeek, Item, Temp } from "./WeatherForDay.styled";

// eslint-disable-next-line react/prop-types
const WeatherForDay = ({ props: { datetime, icon, tempmax, tempmin } }) => {
  const dayName = getDayName(datetime);

  return (
    <Item>
      <DayOfWeek>{dayName}</DayOfWeek>
      <img src={icon} alt="" />
      <Temp>
        {Math.floor(tempmax) + "°"}/{Math.floor(tempmin) + "°"}
      </Temp>
    </Item>
  );
};

export default WeatherForDay;
