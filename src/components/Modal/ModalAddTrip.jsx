import { Formik, Field, Form, ErrorMessage } from "formik";
import { date, object, string } from "yup";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addTrip } from "../../redux/tripsSlice";
import { nanoid } from "nanoid";
import { cities } from "../../cities";
import { AiOutlineCalendar } from "react-icons/ai";
import {
  Modal,
  Header,
  FormStyled,
  SpanForLabel,
  LebelStyled,
  FieldStyled,
  DatePickerStyled,
  AiOutlineCalendarStyled,
  BoxDatePicker,
  BoxForButton,
  BoxForInput,
  CancelBtn,
  SaveBtn,
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
      <Header>Create Trip</Header>
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
              <FieldStyled as="select" id="city" name="city">
                <option value="">Select a city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </FieldStyled>
              <ErrorMessage name="city" component="p" />

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
