import { getDayName } from "../../services";
import { DayOfWeek, Item, Temp } from "./WeatherForDay.styled";
import { icons } from "../../iconForWeather/index";
import { nanoid } from "nanoid";

// eslint-disable-next-line react/prop-types
const WeatherForDay = ({ props: { datetime, icon, tempmax, tempmin } }) => {
  const dayName = getDayName(datetime);

  return (
    <Item>
      <DayOfWeek>{dayName}</DayOfWeek>
      {icons.map((el) => {
        if (el.icon === icon)
          return (
            <img
              key={nanoid()}
              src={el.path}
              alt={icon}
              width={60}
              height={60}
            />
          );
      })}
      <Temp>
        {Math.floor(tempmax) + "°"}/{Math.floor(tempmin) + "°"}
      </Temp>
    </Item>
  );
};

export default WeatherForDay;
