import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import AddTripButton from "./components/AddTripButton/AddTripButton";
import InputSearch from "./components/InputSearch/InputSearch";
import ModalAddTrip from "./components/Modal/ModalAddTrip";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import WeatherTimeBox from "./components/WeatherTimeBox/WeatherTimeBox";
import TripBox from "./components/TripBox/TripBox";

function App() {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <InputSearch />
        <TripBox />
        <AddTripButton />
        <WeatherTimeBox />
        <WeatherToday />
        <ModalAddTrip />
      </Layout>
    </>
  );
}

export default App;
