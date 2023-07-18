import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  transition: border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 250px;
  position: relative;
`;

export const DayOfWeek = styled.p`
  color: white;
  font-size: 35px;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const City = styled.p`
  color: white;
  font-size: 30px;
  font-weight: 500;
`;

export const Temp = styled.p`
  color: white;
  font-size: 55px;
  font-weight: 500;
  position: relative;
`;

export const Celsii = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 400;
  position: absolute;

  left: 60px;
`;

export const Degrees = styled.span`
  color: white;
  font-size: 20px;
  font-weight: 400;
  position: absolute;
`;

export const WeatherBox = styled.div`
  display: flex;

  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  position: absolute;
  top: 60px;
  left: -20px;
`;
