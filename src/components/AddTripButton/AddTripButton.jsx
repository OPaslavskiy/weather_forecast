import { AddTripBtn, Plus } from "./AddTripButton.styled";
import PropTypes from "prop-types";

const AddTripButton = ({ toggleModal }) => {
  return (
    <AddTripBtn type="button" onClick={toggleModal}>
      <Plus />
      Add trip
    </AddTripBtn>
  );
};

AddTripButton.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default AddTripButton;
