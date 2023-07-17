import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import AddTripButton from "./components/AddTripButton/AddTripButton";
import CityWeatherCard from "./components/CityWetaherCard/CityWeatherCard";
import InputSearch from "./components/InputSearch/InputSearch";
import WetherToday from "./components/WeatherToday/WeatherToday";
import WetherTimeBox from "./components/WetherTimeBox/WetherTimeBox";

function App() {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <InputSearch />
        <CityWeatherCard />
        <AddTripButton />
        <WetherTimeBox />
        <WetherToday />
      </Layout>
    </>
  );
}

export default App;
