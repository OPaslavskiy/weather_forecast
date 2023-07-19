import styled from "styled-components";
import { background } from "../image";

export const BoxForListAndBtn = styled.div`
  display: flex;
  margin-top: 40px;
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

export const InformSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 30px;
`;

export const ForecastSection = styled.section`
  width: 70vw;
  padding: 30px;
`;
