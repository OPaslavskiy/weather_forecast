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

  &::placeholder {
    color: black;
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
