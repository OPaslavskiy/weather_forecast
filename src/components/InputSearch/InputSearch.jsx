import { Formik } from "formik";
import {
  FieldFormik,
  FormFormik,
  RiSearchLineStyled,
} from "./InputSearch.styled";

const InputSearch = () => {
  return (
    <Formik
      initialValues={{ searchQuery: "" }}
      onSubmit={() => {
        // Обробка події відправки форми
        // console.log(values.searchQuery);
      }}
    >
      <FormFormik>
        <RiSearchLineStyled />
        <FieldFormik
          type="text"
          name="searchQuery"
          placeholder="Search your trip"
          className="search-input"
        />
      </FormFormik>
    </Formik>
  );
};

export default InputSearch;
