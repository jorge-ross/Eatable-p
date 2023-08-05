import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import DishCover from "./dish-cover";
import { Link } from "react-router-dom";
import { BiSolidTrash } from 'react-icons/bi';
import { RiEditBoxFill } from 'react-icons/ri'

const Container = styled.div`
  width: 156px;
  height: 230px;
  border-radius: 30px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: relative;

  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 375px) {
    width: 130px;
    height: 180px;
    gap: 0.5rem;
  }
`;

const DishName = styled.p`
  ${typography.text.xl}
  margin: 0;
  padding-top: 14px;
  font-weight: 600;
  text-align: center;
  position: relative;
  top: -2rem;
`;

const DishPrice = styled.p`
  ${typography.text.xl}
  margin: 0;
  font-weight: 600;
  text-align: center;
  position: relative;
  top: -2rem;
`;

const ImageContainer = styled.div`
  position: relative;
  top: -2.4rem;
`;

const TrashCont = styled.div`
  position: absolute;
  bottom: 8px;
  right: 30px;
  color: #FA4A0C;
  font-size: 1rem;
  cursor: pointer;
`

const EditCont = styled.div`
  position: absolute;
  bottom: 8px;
  left: 30px;
  color: #FA4A0C;
  font-size: 1rem;
`

function DishCard(product, onDeleteClick) {

  return (
  <Container>
    <Link to={`/products/${product.id}`}>
    <ImageContainer>
     <DishCover size={"sm"} src={product.picture_url} />
    </ImageContainer>
    </Link>
    <DishName>{product.name}</DishName>
    <DishPrice color={"#FA4A0C"}>${product.price}</DishPrice>
    <TrashCont onClick={onDeleteClick}>
      <BiSolidTrash />
    </TrashCont>
    <Link to={`/products/${product?.id}/edit`}>
    <EditCont>
      <RiEditBoxFill />
    </EditCont>
    </Link>
  </Container>
  )
}

export default DishCard;

// const navigate = useNavigate();
// navigate("/products")