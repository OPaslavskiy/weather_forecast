import { AddTripBtn, Plus } from "./AddTripButton.styled";

// eslint-disable-next-line react/prop-types
const AddTripButton = ({ toggleModal }) => {
  return (
    <AddTripBtn type="button" onClick={toggleModal}>
      <Plus />
      Add trip
    </AddTripBtn>
  );
};

export default AddTripButton;
