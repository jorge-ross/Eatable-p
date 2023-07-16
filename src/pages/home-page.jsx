import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { typography } from "../styles/typography";
import DishCard from "../components/dish-card";
import { getDishes } from "../services/dish-service";

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

const DishContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 58px;
  grid-column-gap: 20px;
  grid-template-rows: repeat(5, 1fr);
  place-items: center;
  padding: 46px 20px;
  height: 694px;
  overflow-y: auto;
`

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding-top: 24px;
  padding-bottom: 24px;
  position: sticky;
  ${typography.text.xl}
`

function HomePage() {

  const [products, setProducts ] = useState([]);  
  useEffect(() => {
    // console.log("hola")
    getDishes().then(setProducts).catch(console.log)
  }, []);
  // console.log(products)

  return (
    <ContainerPage>
      <div>
        <Header>
         Products Dashboard
        </Header>
      </div>
      <DishContainer>
      {products?.map((dish) => (
        <DishCard
          key={dish.id}
          props={dish}
        />    
       ))}
      </DishContainer>
    </ContainerPage>
  )
}

export default HomePage;
