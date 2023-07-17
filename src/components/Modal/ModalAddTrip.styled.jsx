import styled from "styled-components";
import { Field, Form, Formik, ErrorMessage } from "formik";
import DatePicker from "react-datepicker";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const Modal = styled.div`
  width: 600px;

  background-color: #fff;
  border-radius: 1px;
`;

export const Header = styled.p`
  font-size: 15px;
  font-weight: 600;
`;

export const AiOutlineCloseStyle = styled(AiOutlineClose)`
  cursor: pointer;
  transition: color 0.4s ease;

  &:hover,
  &:focus {
    color: #3ab2f7;
  }
`;

export const DivForTitelBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  font-weight: 600;
  padding: 20px;
  border-bottom: 1px solid #ebe8e8;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 600;
  /* padding: 60px 15px 15px; */
  border-bottom: 1px solid grey;
`;

export const SpanForLabel = styled.span`
  color: red;
`;

export const LebelStyled = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const DatePickerStyled = styled(DatePicker)`
  font-size: 15px;
  padding: 8px;
  font-weight: 600;
  margin-bottom: 8px;
  border: 1px solid #ebe8e8;
  border-radius: 1px;
  color: #b3b0b0;
  font-weight: 400;
  width: 560px;
  cursor: pointer;
`;

export const BoxDatePicker = styled.div`
  position: relative;
`;
export const AiOutlineCalendarStyled = styled(AiOutlineCalendar)`
  position: absolute;
  top: 40%;
  left: 98%;
  transform: translate(-50%, -50%);
  color: #b3b0b0;
`;

export const BoxForButton = styled.div`
  border-top: 1px solid #ebe8e8;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

export const BoxForInput = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 600;
  padding: 60px 20px 60px;
`;

export const CancelBtn = styled.button`
  font-size: 12px;
  border: 1px solid #ebe8e8;
  padding: 6px 12px;
  cursor: pointer;
  margin-right: 8px;
  background-color: #fff;
  border-radius: 3px;
  font-weight: 600;
  transition: background-color 0.4s ease;

  &:hover,
  &:focus {
    background-color: #cfcfcf;
  }
`;

export const SaveBtn = styled.button`
  font-size: 12px;
  background-color: #3ab2f7;
  border: none;
  padding: 6px 12px;
  cursor: pointer;
  margin-right: 8px;
  color: #fff;
  border-radius: 3px;
  font-weight: 600;

  transition: background-color 0.4s ease;

  &:hover,
  &:focus {
    background-color: #0ca4fc;
  }
`;

export const StyleErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-top: 1px;
  margin-left: 5px;
  font-size: 10px;
  margin-bottom: 10px;
`;
