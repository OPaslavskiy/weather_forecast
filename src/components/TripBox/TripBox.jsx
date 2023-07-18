/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeatherToday, fetchWeatherTime } from "../../redux/operation";
import {
  TripList,
  AiFillCaretLeftStyle,
  AiFillCaretRightStyle,
} from "./TripBox.styled";
import TripWeatherCard from "../TripWetaherCard/TripWeatherCard";
import { formatedDateForRequest } from "../../services";

const TripBox = () => {
  const selectTrips = (state) => state.trips;
  const trips = useSelector(selectTrips);

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
          city: trips[0].city,
          startDate: formatedDateForRequest(trips[0].start),
          endDate: formatedDateForRequest(trips[0].end),
        })
      );
    }
  }, []);

  return <TripListContainer trips={sortedFilteredTrips} />;
};

// eslint-disable-next-line react/prop-types
const TripListContainer = ({ trips }) => {
  const tripListRef = useRef(null);

  const handleScrollLeft = () => {
    tripListRef.current.scrollBy({
      top: 0,
      left: -270,
      behavior: "smooth",
    });
  };

  const handleScrollRight = () => {
    tripListRef.current.scrollBy({
      top: 0,
      left: 270,
      behavior: "smooth",
    });
  };

  return (
    <>
      <AiFillCaretLeftStyle onClick={handleScrollLeft} />
      <TripList ref={tripListRef}>
        {trips?.map((trip) => (
          <TripWeatherCard key={trip.id} props={trip} firstTrip={trips[0]} />
        ))}
      </TripList>
      <AiFillCaretRightStyle onClick={handleScrollRight} />
    </>
  );
};

export default TripBox;
