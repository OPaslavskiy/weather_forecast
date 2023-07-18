import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";

import MainPage from "./pages/MainPage";
import "./calendar.css";

function App() {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <MainPage />
        {/* <ModalAddTrip /> */}
      </Layout>
    </>
  );
}

export default App;
