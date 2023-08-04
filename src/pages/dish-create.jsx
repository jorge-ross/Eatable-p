import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import { useNavigate } from "react-router-dom";
import { newDish } from '../services/dish-service';
import { Button } from "../components/button";
import { useState } from "react";

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

const NewDish = () => {

  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    picture_url: "",
  });

  const navigate = useNavigate();

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category,
      picture_url: product.picture_url,
    };

    await newDish(newProduct);
      console.log("Dish created");

      navigate('/products');
  }

  return (
    <ContainerPage>
      <Header>
        Create Dish
      </Header>
      <Body>
          <Container>
            <label htmlFor="name">Name</label>
            <Data
            type="text" 
            id="name" 
            name="name"
            onChange={handleChange}
            value={product.name}
            />
          </Container>

          <Container>
            <label htmlFor="name">Price</label>
            <Data
            type="integer" 
            id="price" 
            name="price"
            onChange={handleChange}
            value={product.price}
            />
          </Container>

          <Container>
            <label htmlFor="name">Description (Max 150 characters)</label>
            <FieldDescription
              type="text"
              id="description"
              name="description"
              onChange={handleChange}
              value={product.description}
            /> 
          </Container>

          <Container>
            <label htmlFor="name">Category</label>
            <Data 
              type="text"
              id="category"
              name="category"
              onChange={handleChange}
              value={product.category}
            />
          </Container>

          <Container>
            <label htmlFor="name">Picture URL</label>
            <FieldURL
            type="text"
            id="picture_url"
            name="picture_url"
            onChange={handleChange}
            value={product.picture_url}
            />
          </Container>
          
          <Button onClick={handleSubmit}>
            Save
          </Button>
      </Body>
    </ContainerPage>
  )
}

export default NewDish;