import { useSelector } from "react-redux";

import CityWeatherCard from "../CityWetaherCard/CityWeatherCard";

const TripBox = () => {
  const selectTrips = (state) => state.trips;
  const trips = useSelector(selectTrips);

  return (
    <div>
      <ul>
        {trips?.map((trip) => (
          <CityWeatherCard key={trip.id} props={trip} firstTrip={trips[0]} />
        ))}
      </ul>
    </div>
  );
};

export default TripBox;
