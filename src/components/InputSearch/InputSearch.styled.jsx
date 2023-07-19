import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";

export const FieldFormik = styled.input`
  padding: 15px 10px 15px 40px;
  width: 220px;
  font-size: 12px;
  color: black;
  border: none;
  background-color: #ebe8e8;
  border-radius: 6px;
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &::placeholder {
    color: black;
  }

  &:hover,
  &:focus {
    background-color: #dbdada;
  }
`;

export const FormFormik = styled.div`
  position: relative;
`;

FormFormik;

export const RiSearchLineStyled = styled(RiSearchLine)`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
`;
