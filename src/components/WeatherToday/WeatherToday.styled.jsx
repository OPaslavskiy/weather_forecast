import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  border: 1px solid #c52020;
  transition: border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const DayOfWeek = styled.p`
  color: white;
  font-size: 25px;
  font-weight: 800;
  margin-bottom: 10px;
`;

export const City = styled.p`
  color: white;
  font-size: 25px;
  font-weight: 500;
`;

export const Temp = styled.p`
  color: white;
  font-size: 50px;
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
