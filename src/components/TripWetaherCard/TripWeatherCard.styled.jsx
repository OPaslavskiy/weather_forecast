import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const BoxForTrip = styled.div`
  padding: 15px;
  border: 1px solid #a7a7a7;
  transition: border-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  /* Додаємо позицію relative, щоб вкласти абсолютно позиціонований AiOutlineCloseStyled */
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
  transition: opacity 0.2s; /* Анімація при зміні прозорості */
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
    border-color: #3ab2f7; /* Зміна кольору рамки при hover */
  }

  &:hover ${AiOutlineCloseStyled} {
    opacity: 1;
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

// // Показуємо іконку при ховері або фокусі на ItemTrip
// ItemTrip:hover ${AiOutlineCloseStyled}, ItemTrip:focus ${AiOutlineCloseStyled} {
//   opacity: 1;
// }
