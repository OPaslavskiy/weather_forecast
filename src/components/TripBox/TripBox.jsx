import { useSelector } from "react-redux";
import TripWeatherCard from "../TripWetaherCard/TripWeatherCard";
import { TripList } from "./TripBox.styled";
import { useEffect } from "react";
import { fetchWeatherToday, fetchWeatherTime } from "../../redux/operation";
import { useDispatch } from "react-redux";
import { formatedDateForRequest } from "../../services";

const TripBox = () => {
  const selectTrips = (state) => state.trips;
  const trips = useSelector(selectTrips);
  console.log(`trips====>>>>>>`, trips);

  const selectFilter = (state) => state.filter;
  const filterSelector = useSelector(selectFilter);
  const filterTrips = trips.filter((trip) =>
    trip.city.toLowerCase().includes(filterSelector.toLowerCase())
  );

  function compareStartDates(a, b) {
    const dateA = new Date(a.start);
    const dateB = new Date(b.start);

    return dateA - dateB;
  }

  const sortedFilteredTrips = filterTrips.sort(compareStartDates);

  const dispatch = useDispatch();

  useEffect(() => {
    if (trips.length > 0) {
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
    }
  }, []);

  return (
    <TripList>
      {sortedFilteredTrips?.map((trip) => (
        <TripWeatherCard key={trip.id} props={trip} firstTrip={trips[0]} />
      ))}
    </TripList>
  );
};

export default TripBox;
