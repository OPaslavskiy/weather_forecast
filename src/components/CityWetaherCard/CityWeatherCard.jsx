import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherToday, fetchWeatherTime } from "../../redux/operation";

// eslint-disable-next-line react/prop-types
const CityWeatherCard = ({ props: { city, start, end }, firstTrip }) => {
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
    <li
      onClick={() =>
        handlerSubmit(
          city,
          formatedDateForRequest(start),
          formatedDateForRequest(end)
        )
      }
    >
      <img src="" alt="" />
      <p>{city}</p>
      <p>
        {formatedDateForPage(start)} - {formatedDateForPage(end)}
      </p>
    </li>
  );
};

export default CityWeatherCard;
