import styled from "styled-components";
import { background } from "../image";

export const BoxForListAndBtn = styled.div`
  display: flex;
  margin-top: 40px;
  gap: 40px;
`;

export const Header = styled.h1`
  font-size: 15px;
  margin-bottom: 40px;
  font-weight: 400;
`;

export const HeaderSpan = styled.span`
  font-weight: 700;
`;

export const MainBox = styled.div`
  display: flex;
`;

export const InformBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover; /* Змінюємо розмір фонового зображення, щоб воно покрило весь фон */
  background-repeat: no-repeat; /* Забороняємо повторення зображення, якщо воно менше контейнера */
  background-position: center;
  padding: 30px;
`;

export const BoxForecast = styled.div`
  width: 65vw;
  padding: 30px;
`;
