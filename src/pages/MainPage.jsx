import AddTripButton from "../components/AddTripButton/AddTripButton";
import InputSearch from "../components/InputSearch/InputSearch";
import ModalPortal from "../components/ModalPortal/ModalPortal";
import TripBox from "../components/TripBox/TripBox";
import WeatherTimeBox from "../components/WeatherTimeBox/WeatherTimeBox";
import WeatherToday from "../components/WeatherToday/WeatherToday";
import { BoxForListAndBtn, Header, HeaderSpan } from "./MainPage.styled";
import { useState } from "react";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <div>
      <div>
        <Header>
          Weather <HeaderSpan>Forecast</HeaderSpan>
        </Header>
        <InputSearch />
        <BoxForListAndBtn>
          <TripBox />
          <AddTripButton toggleModal={toggleModal} />
          {showModal && <ModalPortal onClose={toggleModal} />}
        </BoxForListAndBtn>

        <WeatherTimeBox />
      </div>
      <div>
        <WeatherToday />
      </div>
    </div>
  );
};

export default MainPage;
