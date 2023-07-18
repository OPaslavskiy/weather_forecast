import AddTripButton from "../components/AddTripButton/AddTripButton";
import InputSearch from "../components/InputSearch/InputSearch";
import ModalPortal from "../components/ModalPortal/ModalPortal";
import TripBox from "../components/TripBox/TripBox";
import WeatherTimeBox from "../components/WeatherTimeBox/WeatherTimeBox";
import WeatherToday from "../components/WeatherToday/WeatherToday";
import {
  BoxForListAndBtn,
  Header,
  HeaderSpan,
  MainBox,
  InformBox,
  BoxForecast,
} from "./MainPage.styled";
import { useState } from "react";

const MainPage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  return (
    <MainBox>
      <BoxForecast>
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
      </BoxForecast>
      <InformBox>
        <WeatherToday />
      </InformBox>
    </MainBox>
  );
};

export default MainPage;
