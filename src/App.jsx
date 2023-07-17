import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
// import ModalAddTrip from "./components/Modal/ModalAddTrip";
import WeatherToday from "./components/WeatherToday/WeatherToday";
import "./calendar.css";

import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <MainPage />
        <WeatherToday />
        {/* <ModalAddTrip /> */}
      </Layout>
    </>
  );
}

export default App;
