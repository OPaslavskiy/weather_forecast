import { useSelector } from "react-redux";
import TripWeatherCard from "../TripWetaherCard/TripWeatherCard";
import { TripList } from "./TripBox.styled";
import { useEffect } from "react";
import { fetchWeatherToday, fetchWeatherTime } from "../../redux/operation";
import { useDispatch } from "react-redux";
import { formatedDateForRequest } from "../../services";
// import { formatedDateForPage } from "../../services";

const TripBox = () => {
  const selectTrips = (state) => state.trips;
  const trips = useSelector(selectTrips);

  const selectFilter = (state) => state.filter;
  const filter = useSelector(selectFilter);
  const filterCity = trips.filter((trip) =>
    trip.city.toLowerCase().includes(filter.toLowerCase())
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(`111111111111111111111`, firstTrip);
    // eslint-disable-next-line react/prop-types
    dispatch(fetchWeatherToday(trips[0].city));
    dispatch(
      fetchWeatherTime({
        // eslint-disable-next-line react/prop-types
        city: trips[0].city,
        // eslint-disable-next-line react/prop-types
        startDate: formatedDateForRequest(trips[0].start),
        // eslint-disable-next-line react/prop-types
        endDate: formatedDateForRequest(trips[0].end),
      })
    );
  }, []);

  return (
    <TripList>
      {filterCity?.map((trip) => (
        <TripWeatherCard key={trip.id} props={trip} firstTrip={trips[0]} />
      ))}
    </TripList>
  );
};

export default TripBox;
