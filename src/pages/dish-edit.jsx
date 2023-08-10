import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { editDish, showDish } from '../services/dish-service';
import { Button } from "../components/button";


const ContainerPage = styled.div`
  margin: 0 auto;
  max-width: 414px;
  height: 832px;
  background-color: white;
  border-radius: 20px;
  padding-top: 24px;
  padding-bottom: 24px;
  position: relative;

  @media (max-width: 414px) {
    max-width: 374px;
    max-height: 896px;
  }
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding-top: 24px;
  padding-bottom: 32px;
  ${typography.text.xl}
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Container = styled.div`
  ${typography.text.xt} 
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  gap: 5px;
`;

const Data = styled.input`
  ${typography.text.xx}
  margin: 0;
  font-weight: 400;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid black;
`;

const FieldDescription = styled.textarea`
  ${typography.text.xx}
  height: 154px;
  margin: 0;
  font-weight: 400;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid black;
`

const FieldURL = styled.textarea`
  ${typography.text.xx}
  height: 75px;
  width: 100%
  margin: 0;
  font-weight: 400;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid black;
  overflow: hidden;
  white-space: pre-wrap;
`

const ErrorMessage = styled.p`
  ${typography.text.xs}
  color: red;
  margin: 0;
`

function DishEdit() {

  const {id} = useParams();
  // console.log(id);

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    picture_url: "",
  });

    const [errors, setErrors] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    picture_url: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    showDish(id).then((data) => {
      setProduct(data);
    }).catch();
  }, [id]);

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });

     if (value === "") {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "This field is required." }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const formValid = Object.values(product).every((value) => value !== "");
    if (!formValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...Object.fromEntries(
          Object.entries(product).map(([key, value]) => [
            key,
            value === "" ? "This field is required." : "",
          ])
        ),
      }));
    return;
  }
    const newData = {
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      picture_url: product.picture_url,
    };

    await editDish(id, newData);
      console.log("Dish updated");

      navigate(`/products/${product?.id}`)
  }

  return (
    <ContainerPage>
      <Header>
        Edit Dish
      </Header>
      <Body>
          <Container>
            <label htmlFor="name">Name</label>
            <Data
            type="text" 
            id="name" 
            name="name"
            value={product.name} 
            onChange={handleChange}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </Container>
          <Container>
            <label htmlFor="name">Price</label>
            <Data
            type="integer" 
            id="price" 
            name="price" 
            value={product.price} 
            onChange={handleChange}
            />
            {errors.price && <ErrorMessage>{errors.price}</ErrorMessage>}
          </Container>
          <Container>
            <label htmlFor="name">Description (Max 150 characters)</label>
            <FieldDescription
              type="text"
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
            /> 
            {errors.description && <ErrorMessage>{errors.description}</ErrorMessage>}
          </Container>
          <Container>
            <label htmlFor="name">Category</label>
            <Data 
              type="text"
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
            />
            {errors.category && <ErrorMessage>{errors.category}</ErrorMessage>}
          </Container>
          <Container>
            <label htmlFor="name">Picture URL</label>
            <FieldURL
            type="text"
            id="picture_url"
            name="picture_url"
            value={product.picture_url}
            onChange={handleChange}              
            />
            {errors.picture_url && <ErrorMessage>{errors.picture_url}</ErrorMessage>}
          </Container>
     
          <Button onClick={handleSubmit}>
            Save
          </Button>

        </Body>
    </ContainerPage>
  )
}

export default DishEdit;