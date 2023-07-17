import "./App.css";
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import AddTripButton from "./components/AddTripButton/AddTripButton";
import CityWeatherCard from "./components/CityWetaherCard/CityWeatherCard";
import InputSearch from "./components/InputSearch/InputSearch";

function App() {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <InputSearch />
        <CityWeatherCard />
        <AddTripButton />
      </Layout>
    </>
  );
}

export default App;
