import styled from "styled-components";
import DatePicker from "react-datepicker";
import { Form, ErrorMessage } from "formik";
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
  transition: color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

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

  transition: border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border-color: #3ab2f7;
  }
`;

export const BoxDatePicker = styled.div`
  position: relative;

  .react-datepicker__current-month {
    color: #3ab2f7;
    font-size: 13px;

    font-weight: 600;
    letter-spacing: -0.32px;
  }

  .react-datepicker {
    background: #fff;
    border-radius: 8px;
    border: 1px solid #3ab2f7;
    padding: 9px;
  }

  .react-datepicker__header {
    background: #fff;
    border: none;
  }

  .react-datepicker__navigation-icon--previous::before {
    border-color: #3ab2f7;
    width: 8px;
    height: 8px;
  }

  .react-datepicker__navigation-icon--next::before {
    border-color: #3ab2f7;
    width: 8px;
    height: 8px;
  }

  .react-datepicker__navigation--previous {
    top: 18px;
  }

  .react-datepicker__navigation--next {
    top: 18px;
  }

  .react-datepicker__day-names {
    margin-top: 14px;
    padding-top: 4px;
    border-top: 1px;
    border-top-color: #3ab2f7;
    border-top-style: solid;
    display: flex;
    gap: 11px;
  }

  .react-datepicker__day-name {
    color: #003d61;
    font-size: 13px;
    font-weight: 600;
    margin: 0px;
    width: 22px;
    height: 22px;
    margin-bottom: 11px;
  }

  .react-datepicker__day {
    color: #3ab2f7;
    font-size: 13px;
    line-height: 18px;

    letter-spacing: 28;
    margin: 0px;
  }

  .react-datepicker__day {
    min-width: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-datepicker__month {
    margin: 0px;
  }

  .react-datepicker__week {
    display: block;
    width: 22px;
    height: 22px;
    display: flex;

    gap: 11px;
  }

  .react-datepicker__week:not(:last-child) {
    margin-bottom: 11px;
  }

  .react-datepicker__day--selected {
    background-color: #03304b;
    color: #237caf;
    border-radius: 50%;
  }

  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: inherit;
  }

  .react-datepicker__triangle {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  .react-datepicker__day--selected:hover,
  .react-datepicker__day--selected:focus {
    border-radius: 50%;
  }

  .react-datepicker__day--disabled {
    color: grey;
  }

  .react-datepicker__day--disabled:hover,
  .react-datepicker__day--disabled:focus {
    color: grey;
    border-radius: 50%;
  }
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
  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

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

  transition: background-color 0.4s cubic-bezier(0.4, 0, 0.2, 1);

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
