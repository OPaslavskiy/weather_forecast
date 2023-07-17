import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherToday, fetchWeatherTime } from "../../redux/operation";
import {
  CityImg,
  CityName,
  DatePeriod,
  ItemTrip,
  BoxForTrip,
} from "./TripWeatherCard.styled";

// eslint-disable-next-line react/prop-types
const TripWeatherCard = ({ props: { city, start, end }, firstTrip }) => {
  const dispatch = useDispatch();

  function formatedDateForRequest(date) {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    const formattedDateForRequest = `${year}-${month}-${day}`;
    return formattedDateForRequest;
  }

  function formatedDateForPage(date) {
    const dateObj = new Date(date);
    const day = String(dateObj.getDate()).padStart(2, "0");
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const year = dateObj.getFullYear();
    const formatedDateForPage = `${day}-${month}-${year}`;
    return formatedDateForPage;
  }

  useEffect(() => {
    dispatch(fetchWeatherToday(firstTrip.city));
    dispatch(
      fetchWeatherTime({
        city: firstTrip.city,
        startDate: formatedDateForRequest(firstTrip.start),
        endDate: formatedDateForRequest(firstTrip.end),
      })
    );
  }, [dispatch, firstTrip]);

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
      <CityImg src="" alt={city} />
      <BoxForTrip>
        <CityName>{city}</CityName>
        <DatePeriod>
          {formatedDateForPage(start)} - {formatedDateForPage(end)}
        </DatePeriod>
      </BoxForTrip>
    </ItemTrip>
  );
};

export default TripWeatherCard;
