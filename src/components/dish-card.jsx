import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import DishCover from "./dish-cover";
import { Link } from "react-router-dom";

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

function DishCard({props}) {
  // const navigate = useNavigate();
// navigate("/products")
  return (
  <Container>
    <Link to={`/products/${props.id}`}>
    <ImageContainer>
     <DishCover size={"sm"} src={props.picture_url} />
    </ImageContainer>
    </Link>
    <DishName>{props.name}</DishName>
    <DishPrice color={"#FA4A0C"}>${props.price}</DishPrice>
  </Container>
  )
}

export default DishCard;

// const navigate = useNavigate();
// navigate("/products")