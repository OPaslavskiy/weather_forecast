import { getDayName } from "../../services";
import { DayOfWeek, Item, Temp } from "./WeatherForDay.styled";
import { icons } from "../../iconForWeather/index";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

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

WeatherForDay.propTypes = {
  props: PropTypes.shape({
    datetime: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    tempmax: PropTypes.number.isRequired,
    tempmin: PropTypes.number.isRequired,
  }).isRequired,
};

export default WeatherForDay;
