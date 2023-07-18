import { useDispatch } from "react-redux";
import { fetchWeatherToday, fetchWeatherTime } from "../../redux/operation";
import {
  CityImg,
  CityName,
  DatePeriod,
  ItemTrip,
  BoxForTrip,
} from "./TripWeatherCard.styled";
import { cities } from "../../cities";
import { formatedDateForRequest } from "../../services";
import { formatedDateForPage } from "../../services";
import { deleteTrip } from "../../redux/tripsSlice";

// eslint-disable-next-line react/prop-types
const TripWeatherCard = ({ props: { city, start, end, id } }) => {
  const dispatch = useDispatch();

  const handlerSubmit = (
    city,
    startDateFormatedForPage,
    endDateFormatedForPage
  ) => {
    dispatch(fetchWeatherToday(city));
    dispatch(
      fetchWeatherTime({
        city: city,
        startDate: startDateFormatedForPage,
        endDate: endDateFormatedForPage,
      })
    );
  };

  const deleteCard = (id) => {
    dispatch(deleteTrip(id));
  };

  return (
    <ItemTrip
      onClick={() =>
        handlerSubmit(
          city,
          formatedDateForRequest(start),
          formatedDateForRequest(end)
        )
      }
    >
      <CityImg
        src={cities.find((image) => image.city === city)?.path}
        alt={city}
      />
      <BoxForTrip>
        <CityName>{city}</CityName>
        <DatePeriod>
          {formatedDateForPage(start)} - {formatedDateForPage(end)}
        </DatePeriod>
      </BoxForTrip>

      <button type="button" onClick={() => deleteCard(id)}>
        delete
      </button>
    </ItemTrip>
  );
};

export default TripWeatherCard;
