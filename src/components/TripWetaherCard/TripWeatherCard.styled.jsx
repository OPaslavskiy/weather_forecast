import styled from "styled-components";

export const BoxForTrip = styled.div`
  padding: 15px;
  border: 1px solid #a7a7a7;
  transition: border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ItemTrip = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 180px;

  border-radius: 1px;
  cursor: pointer;
  transition: box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:hover ${BoxForTrip} {
    border-color: #3ab2f7; /* Зміна кольору рамки при hover */
  }
`;

export const CityName = styled.h2`
  font-size: 10px;
  margin-bottom: 10px;
`;

export const CityImg = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
`;

export const DatePeriod = styled.p`
  font-size: 10px;
  color: #a7a7a7;
`;
