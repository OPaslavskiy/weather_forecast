import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const BoxForTrip = styled.div`
  padding: 12px;
  border: 1px solid #ebebeb;
  transition: border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const AiOutlineCloseStyled = styled(AiOutlineClose)`
  font-size: 20px;
  z-index: 99;
  color: #ffffff;
  position: absolute;
  top: 10px;
  right: 10px;
  opacity: 0;
  border-radius: 50%;
  border: 1px solid #fff;
  padding: 4px;
  transition: opacity 0.2s;
`;

export const ItemTrip = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;
  position: relative;
  border-radius: 1px;
  cursor: pointer;
  transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  hover ${BoxForTrip} {
    border-color: #34a3e4;
  }

  &:hover ${AiOutlineCloseStyled} {
    opacity: 1;
  }
`;

export const CityName = styled.h2`
  font-size: 11px;
  margin-bottom: 10px;
`;

export const CityImg = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
`;

export const DatePeriod = styled.p`
  font-size: 11px;
  color: #a7a7a7;
`;
