import { useSelector } from "react-redux";
import TripWeatherCard from "../TripWetaherCard/TripWeatherCard";
import { TripList } from "./TripBox.styled";

const TripBox = () => {
  const selectTrips = (state) => state.trips;
  const trips = useSelector(selectTrips);

  const selectFilter = (state) => state.filter;
  const filter = useSelector(selectFilter);
  const filterCity = trips.filter((trip) =>
    trip.city.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <TripList>
      {filterCity?.map((trip) => (
        <TripWeatherCard key={trip.id} props={trip} firstTrip={trips[0]} />
      ))}
    </TripList>
  );
};

export default TripBox;
