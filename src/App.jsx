import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import AddTripButton from "./components/AddTripButton/AddTripButton";
import CityWeatherCard from "./components/CityWetaherCard/CityWeatherCard";
import InputSearch from "./components/InputSearch/InputSearch";
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
      </Layout>
    </>
  );
}

export default App;
