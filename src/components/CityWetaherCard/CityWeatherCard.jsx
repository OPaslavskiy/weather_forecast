import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchWeatherToday, fetchWeatherTime } from "../../redux/operation";

const CityWeatherCard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeatherToday("london"));
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchWeatherTime({
        city: "london",
        startDate: "2023-08-01",
        endDate: "2023-08-04",
      })
    );
  }, [dispatch]);

  return (
    <div>
      <img src="" alt="" />
      <p>London</p>
      <p>20.07.2023 - 25.07.2023</p>
    </div>
  );
};

export default CityWeatherCard;
