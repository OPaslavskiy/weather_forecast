import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { fetchWeatherToday, fetchWeatherTime } from "../../redux/operation";
import {
  CityImg,
  CityName,
  DatePeriod,
  ItemTrip,
  BoxForTrip,
  AiOutlineCloseStyled,
} from "./TripWeatherCard.styled";
import { cities } from "../../cities";
import { formatedDateForRequest } from "../../services";
import { formatedDateForPage } from "../../services";
import { deleteTrip } from "../../redux/tripsSlice";
import { setDate } from "../../redux/startDateSlice";

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
    dispatch(setDate(start));
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

      <AiOutlineCloseStyled onClick={() => deleteCard(id)} />
    </ItemTrip>
  );
};

TripWeatherCard.propTypes = {
  props: PropTypes.shape({
    city: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default TripWeatherCard;
