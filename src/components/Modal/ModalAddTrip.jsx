import { Formik, Field } from "formik";
import { date, object, string } from "yup";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { nanoid } from "nanoid";

import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

import { addTrip } from "../../redux/tripsSlice";
import { cities } from "../../cities";

import "./modalAddTrip.css";

import {
  Modal,
  Header,
  DivForTitelBtn,
  FormStyled,
  SpanForLabel,
  LebelStyled,
  DatePickerStyled,
  AiOutlineCalendarStyled,
  BoxDatePicker,
  BoxForButton,
  BoxForInput,
  CancelBtn,
  SaveBtn,
  StyleErrorMessage,
  AiOutlineCloseStyle,
} from "./ModalAddTrip.styled";

const tripSchema = object({
  city: string().required("City is a required field"),
  start: date().nullable().required("Start date is required"),
  end: date().nullable(true).required("End date is a required field"),
});

const initialValues = {
  city: "",
  start: null,
  end: null,
};

// eslint-disable-next-line react/prop-types
const ModalAddTrip = ({ onClose }) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addTrip({ id: nanoid(), ...values }));
    resetForm();
    setStartDate(null);
    setEndDate(null);
    onClose();
  };
  const handleCancel = (resetForm) => {
    resetForm();
    setStartDate(null);
    setEndDate(null);
  };

  return (
    <Modal>
      <DivForTitelBtn>
        <Header>Create Trip</Header>
        <AiOutlineCloseStyle onClick={onClose} />
      </DivForTitelBtn>
      <Formik
        validationSchema={tripSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ setFieldValue, resetForm }) => (
          <FormStyled>
            <BoxForInput>
              <LebelStyled htmlFor="city">
                <SpanForLabel>*</SpanForLabel>
                City
              </LebelStyled>
              <Field as="select" id="city" name="city" className="input-city">
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city.id} value={city.city}>
                    {city.city}
                  </option>
                ))}
              </Field>
              <StyleErrorMessage name="city" component="p" />

              <LebelStyled htmlFor="start">
                <SpanForLabel>*</SpanForLabel>
                Start date
              </LebelStyled>
              <BoxDatePicker>
                <DatePickerStyled
                  selected={startDate}
                  onChange={(selectedDate) => {
                    setStartDate(selectedDate);
                    setFieldValue("start", selectedDate.toISOString());
                  }}
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 15)}
                  calendarStartDay={1}
                  placeholderText="Select date"
                />
                <AiOutlineCalendarStyled />
                <StyleErrorMessage name="start" component="div" />
              </BoxDatePicker>

              <LebelStyled htmlFor="end">
                <SpanForLabel>*</SpanForLabel>
                End date
              </LebelStyled>
              <BoxDatePicker>
                <DatePickerStyled
                  selected={endDate}
                  onChange={(selectedDate) => {
                    if (!startDate) {
                      alert("Please select a start date first");
                      return;
                    }
                    setEndDate(selectedDate);
                    setFieldValue("end", selectedDate.toISOString());
                  }}
                  minDate={startDate || new Date()}
                  maxDate={addDays(startDate, 15)}
                  calendarStartDay={1}
                  placeholderText="Select date"
                />
                <AiOutlineCalendarStyled />
                <StyleErrorMessage name="end" component="div" />
              </BoxDatePicker>
            </BoxForInput>

            <BoxForButton>
              <CancelBtn
                type="button"
                onClick={() => {
                  handleCancel(resetForm);
                }}
              >
                Cancel
              </CancelBtn>
              <SaveBtn type="submit">Save</SaveBtn>
            </BoxForButton>
          </FormStyled>
        )}
      </Formik>
    </Modal>
  );
};

export default ModalAddTrip;
