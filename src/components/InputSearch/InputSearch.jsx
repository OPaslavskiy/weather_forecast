import { Formik, Field, Form } from "formik";
import { RiSearchLine } from "react-icons/ri";

const InputSearch = () => {
  return (
    <Formik
      initialValues={{ searchQuery: "" }}
      onSubmit={(values) => {
        // Обробка події відправки форми
        // console.log(values.searchQuery);
      }}
    >
      <Form>
        <RiSearchLine />
        <Field
          type="text"
          name="searchQuery"
          placeholder="Search your trip"
          className="search-input"
        />
      </Form>
    </Formik>
  );
};

export default InputSearch;
