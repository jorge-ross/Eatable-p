import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showDish } from "../services/dish-service";
import DishCover from "../components/dish-cover";
import { typography } from "../styles/typography";
import { Link } from "react-router-dom";

const ContainerPage = styled.div`
  margin: 0 auto;
  max-width: 414px;
  height: 896px;
  background-color: white;
  border-radius: 20px;
  padding-top: 24px;

  @media (max-width: 414px) {
    max-width: 374px;
    max-height: 896px;
  }
`

const CoverDish = styled.div`
display: flex; 
justify-content: center;
padding-top: 94px;
padding-bottom: 91px;
filter: drop-shadow(0px 10px 5px gray);
`

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  ${typography.head.md}
  text-align: center;
`;

const Price = styled.p`
${typography.head.md}
  color: #fa4a0c;
  text-align: center;
  font-weight: 600;
  margin: 10px 0 27px;
`;

const TitleDescription = styled.p`
  ${typography.text.lg}
  margin: 0;
  text-align: left;
  padding-left: 53px;
`;

const Description = styled.p`
  ${typography.text.md}
  text-align: left;
  padding: 4px 53px;
  margin: 0;
  
`;

function DishDetail() {
  const {id} = useParams();
  // console.log(id)
  const [product, setProduct] = useState(null)

  useEffect(() => {
    showDish(id).then(setProduct).catch(console.log)
  }, []);
  // console.log(product)

  return (
    <>
     <ContainerPage>
     <Link to={`/products/${product?.id}/edit`}>
      <CoverDish>
        <DishCover size={"md"} src={product?.picture_url} />
      </CoverDish>
      </Link>
      <DetailSection>
        <Name>{product?.name}</Name>
        <Price>{`$${product?.price}`}</Price>
        <TitleDescription>Description</TitleDescription>
        <Description>{product?.description}</Description>
      </DetailSection>
     </ContainerPage>
    </>
  )
}
export default DishDetail;