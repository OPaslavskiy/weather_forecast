import { Formik, Field } from "formik";
import { date, object, string } from "yup";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addTrip } from "../../redux/tripsSlice";
import { nanoid } from "nanoid";
import { cities } from "../../cities";

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
} from "./ModalAddTrip.styled";

import "./modalAddTrip.css";

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

const ModalAddTrip = () => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addTrip({ id: nanoid(), ...values }));
    resetForm();
    setStartDate(null);
    setEndDate(null);
    // onClose();
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
        <AiOutlineClose />
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
                  <option key={city} value={city}>
                    {city}
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
