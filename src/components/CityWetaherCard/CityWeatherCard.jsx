import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherToday, fetchWeatherTime } from "../../redux/operation";

const CityWeatherCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherToday("london"));
    dispatch(
      fetchWeatherTime({
        city: "london",
        startDate: "2023-08-01",
        endDate: "2023-08-04",
      })
    );
  }, [dispatch]);

  const selectWeather = (state) => state.weatherToday.items;
  const weater = useSelector(selectWeather);
  console.log(weater);
  return (
    <div>
      <img src="" alt="" />
      <p>London</p>
      <p>20.07.2023 - 25.07.2023</p>
    </div>
  );
};

export default CityWeatherCard;
