import AddTripButton from "../components/AddTripButton/AddTripButton";
import InputSearch from "../components/InputSearch/InputSearch";
import TripBox from "../components/TripBox/TripBox";
import WeatherTimeBox from "../components/WeatherTimeBox/WeatherTimeBox";
import WeatherToday from "../components/WeatherToday/WeatherToday";
import { BoxForListAndBtn, Header, HeaderSpan } from "./MainPage.styled";

const MainPage = () => {
  return (
    <div>
      <div>
        <Header>
          Weather <HeaderSpan>Forecast</HeaderSpan>
        </Header>
        <InputSearch />
        <BoxForListAndBtn>
          <TripBox />
          <AddTripButton />
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
