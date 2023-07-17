import { useSelector } from "react-redux";
import TripWeatherCard from "../TripWetaherCard/TripWeatherCard";
import { TripList } from "./TripBox.styled";

const TripBox = () => {
  const selectTrips = (state) => state.trips;
  const trips = useSelector(selectTrips);

  return (
    <TripList>
      {trips?.map((trip) => (
        <TripWeatherCard key={trip.id} props={trip} firstTrip={trips[0]} />
      ))}
    </TripList>
  );
};

export default TripBox;
