import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { typography } from "../styles/typography";
import DishCard from "../components/dish-card";
import { getDishes, deleteDish } from "../services/dish-service";
import { Button } from "../components/button";
import { Link, useNavigate } from "react-router-dom";
import DeleteDish from "./delete-page";

const ContainerPage = styled.div`
  margin: 0 auto;
  max-width: 414px;
  height: 832px;
  background-color: #F6F6F9;
  border-radius: 20px;
  padding-top: 24px;
  padding-bottom: 24px;
  position: relative;

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
  height: 594px;
  overflow-y: auto;
  background-color: white;
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

const Modal = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgb(23 23 23 / 80%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 880px;
`

function HomePage() {

  const [products, setProducts ] = useState([]); 
  const [openModal, setOpenModal] = useState(false);
  const [productDelete, setProductDelete] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    getDishes().then(setProducts).catch(console.log)
  }, []);

  function handleCloseModal() {
    setOpenModal(false);
  }

  function handleOpenModal(id) {
    console.log("portal opened");
    setOpenModal(true);
    setProductDelete(id);
  }

  function handleDeleteDish() {
    deleteDish(productDelete)
    .then(() => {
      setProducts(products.filter((product) => product.id !== productDelete));
    })
    .catch(console.log)
    .finally(() => {
      setOpenModal(false);
      navigate('/products');
    });
}


  return (
    <ContainerPage>
      <div>
        <Header>
         Products Dashboard
        </Header>
      </div>
      <DishContainer>
      {products?.map((product) => (
        <DishCard
          onOpenModal={() => handleOpenModal(product.id)}
          key={product.id}
          product={product}
          // {...product}
        />
      ))}
      </DishContainer>
      <Link to={`/products/new`}>
      <Button>Create Product</Button>
      </Link>
      {openModal ? (
        <Modal>
          <DeleteDish 
          onDeleteClick={handleDeleteDish}
          onCancelClick={handleCloseModal}
          />
        </Modal>
      )
    : null}
    </ContainerPage>
  )
}

export default HomePage;
