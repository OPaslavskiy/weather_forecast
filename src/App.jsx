import { GlobalStyle } from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
// import MainPage from "./pages/MainPage/MainPage";
// import NotFound from "./pages/NotFound/NotFound";
import { lazy, Suspense } from "react";

const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
import "./calendar.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route>
            <Route path="/" element={<MainPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
