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
import { cities } from "../../cities";
import { formatedDateForRequest } from "../../services";
import { formatedDateForPage } from "../../services";

// eslint-disable-next-line react/prop-types
const TripWeatherCard = ({ props: { city, start, end }, firstTrip }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    dispatch(fetchWeatherToday(firstTrip.city));
    dispatch(
      fetchWeatherTime({
        // eslint-disable-next-line react/prop-types
        city: firstTrip.city,
        // eslint-disable-next-line react/prop-types
        startDate: formatedDateForRequest(firstTrip.start),
        // eslint-disable-next-line react/prop-types
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
    </ItemTrip>
  );
};

export default TripWeatherCard;
