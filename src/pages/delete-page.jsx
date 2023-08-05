import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { CancelButton, DeleteButton } from "../components/button";

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

function DeleteDish(onDeleteClick, onCancelClick) {

  return (
    <Container>
      <Title>Are you Sure?</Title>
      <DeleteButton onClick={onDeleteClick}>
        Yes, delete it!
        </DeleteButton>
      <CancelButton onClick={onCancelClick}
      >No, cancel!
      </CancelButton>
    </Container>
  )
}

export default DeleteDish;