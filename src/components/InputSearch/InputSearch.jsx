import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

import {
  FieldFormik,
  FormFormik,
  RiSearchLineStyled,
} from "./InputSearch.styled";

const InputSearch = () => {
  const dispatch = useDispatch();
  return (
    <FormFormik>
      <RiSearchLineStyled />
      <FieldFormik
        type="text"
        name="searchQuery"
        placeholder="Search your trip"
        className="search-input"
        onChange={(event) => dispatch(setFilter(event.currentTarget.value))}
      />
    </FormFormik>
  );
};

export default InputSearch;
