import styled from '@emotion/styled';
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { editDish, showDish } from '../services/dish-service';
import { typography } from '../styles/typography';
import { Button } from "../components/button";



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

const FieldDescription = styled.input`
  ${typography.text.xx}
  height: 146px;
  width: 350px;
  margin: 0;
  font-weight: 400;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid black;
`

const FieldURL = styled.input`
  ${typography.text.xx}
  height: 65px;
  width: 100%
  margin: 0;
  font-weight: 400;
  padding-bottom: 5px;
  border: none;
  border-bottom: 1px solid black;
  overflow: hidden;
  white-space: pre-wrap;
`

function DishForm() {
  const {id} = useParams();
  // console.log(id);

  const [product, setProduct] = useState({})

  useEffect(() => {
    showDish(id).then(setProduct).catch()
  }, [id]);
  
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [picture_url, setPicture_url] = useState("");

  useEffect(() => {
    showDish(id).then(product => {
      setName(product.name);
      setPrice(product.price);
      setDescription(product.description);
      setCategory(product.category);
      setPicture_url(product.picture_url);
    }).catch(console.log)
  }, [id]);

  const handleChange = (event) => {
    const {name, value} = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "picture_url":
        setPicture_url(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newData = {
      name,
      price,
      description,
      category,
      picture_url
    };

    editDish(id, newData).then(response => {
      console.log(response);
    }).catch(console.log)
  };

  
    return (
        <Body>
          <form onSubmit={handleSubmit}>
          <Container>
            <label htmlFor="name">Name</label>
            <Data
            type="text" 
            id="name" 
            name="name" 
            value={name} 
            onChange={handleChange}
            />
          </Container>
          <Container>
            <label htmlFor="name">Price</label>
            <Data
            type="integer" 
            id="price" 
            name="price" 
            value={price} 
            onChange={handleChange}
            />
          </Container>
          <Container>
            <label htmlFor="name">Description (Max 150 characters)</label>
            <FieldDescription
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={handleChange}
            /> 
              
          </Container>
          <Container>
            <label htmlFor="name">Category</label>
            <Data 
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={handleChange}
            />
          </Container>
          <Container>
            <label htmlFor="name">Picture URL</label>
            <FieldURL
            type="text"
            id="picture_url"
            name="picture_url"
            value={picture_url}
            onChange={handleChange}              
            />
          </Container>
          <Link to={`/products/${product?.id}`}>
            <Button type="submit">
            Save
            </Button>
          </Link>
          </form>
        </Body>
    );
}



export default DishForm;