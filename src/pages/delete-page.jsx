import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { CancelButton, DeleteButton } from "../components/button";
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  height: 154px;
  width: 237px;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  background-color: #f6f6f9;
`

const Title = styled.div`
  ${typography.text.xl}
  font-weight: 600;
  text-align: center;
`

function DeleteDish({ onDeleteClick, onCancelClick }) {

  DeleteDish.propTypes = {
    onDeleteClick: PropTypes.func.isRequired,
    onCancelClick: PropTypes.func.isRequired,
  };

  const handleDelete = () => {
    onDeleteClick();
  };

  const handleCancel = () => {
    onCancelClick();
  };

  return (
    <Container>
      <Title>Are you Sure?</Title>
      <DeleteButton onClick={handleDelete}>
        Yes, delete it!
        </DeleteButton>
      <CancelButton onClick={handleCancel}
      >No, cancel!
      </CancelButton>
    </Container>
  )
}

export default DeleteDish;