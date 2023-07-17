import styled from "styled-components";
import { Field, Form, Formik } from "formik";
import DatePicker from "react-datepicker";

export const Modal = styled.div`
  /* padding: 15px; */
  width: 650px;

  border: 1px solid red;

  border-radius: 1px;
`;

export const Header = styled.p`
  font-size: 15px;
  font-weight: 600;
  padding: 15px;
  border-bottom: 1px solid #ebe8e8;
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 600;
  padding: 60px 15px;
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

export const FieldStyled = styled(Field)`
  font-size: 15px;
  padding: 8px;
  font-weight: 600;
  margin-bottom: 8px;
  border: 1px solid #ebe8e8;
  border-radius: 1px;
  color: #b3b0b0;
  font-weight: 400;
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
  width: 620px;
`;
