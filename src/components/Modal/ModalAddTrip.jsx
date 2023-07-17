import { Formik, Field, Form, ErrorMessage } from "formik";
import { date, object, string } from "yup";
import DatePicker from "react-datepicker";
import { useState } from "react";
import { addDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

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

const cities = ["London", "Paris", "New York", "Tokyo"];

const ModalAddTrip = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (values, { resetForm }) => {
    console.log(`values=========>>>>>>>`, values);
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
    <div>
      <p>Create Trip</p>
      <Formik
        validationSchema={tripSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      >
        {({ setFieldValue, resetForm }) => (
          <Form>
            <label htmlFor="city">
              <span>*</span>
              City
            </label>
            <Field as="select" id="city" name="city">
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Field>
            <ErrorMessage name="city" component="p" />

            <label htmlFor="start">
              <span>*</span>
              Start date
            </label>
            <div>
              <DatePicker
                selected={startDate}
                onChange={(selectedDate) => {
                  setStartDate(selectedDate);
                  setFieldValue("start", selectedDate);
                }}
                minDate={new Date()}
                maxDate={addDays(new Date(), 15)}
                calendarStartDay={1}
                placeholderText="Select date"
              />
            </div>

            <label htmlFor="end">
              <span>*</span>
              End date
            </label>
            <div>
              <DatePicker
                selected={endDate}
                onChange={(selectedDate) => {
                  if (!startDate) {
                    alert("Please select a start date first");
                    return;
                  }
                  setEndDate(selectedDate);
                  setFieldValue("end", selectedDate);
                }}
                minDate={startDate || new Date()}
                maxDate={addDays(startDate, 15)}
                calendarStartDay={1}
                placeholderText="Select date"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  handleCancel(resetForm);
                }}
              >
                Cancel
              </button>
              <button type="submit">Save</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ModalAddTrip;
