import { GlobalStyle } from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./calendar.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
