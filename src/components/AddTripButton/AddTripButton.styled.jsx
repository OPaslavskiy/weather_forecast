import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

export const AddTripBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  height: 180px;
  border-radius: 1px;
  background-color: #ebe8e8;
  border: none;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: #dbdada;
  }
`;

export const Plus = styled(BiPlus)`
  font-size: 20px;
`;
