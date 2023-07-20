import { GlobalStyle } from "./GlobalStyle";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));

function App() {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
