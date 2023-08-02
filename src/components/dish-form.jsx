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

const Data = styled.p`
  ${typography.text.xx}
  margin: 0;
  font-weight: 400;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`;

const FieldDescription = styled.p`
  ${typography.text.xx}
  height: 146px;
  margin: 0;
  font-weight: 400;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`

const FieldURL = styled.div`
  ${typography.text.xx}
  height: 55px;
  margin: 0;
  font-weight: 400;
  padding-bottom: 5px;
  border-bottom: 1px solid black;
`

function DishForm() {
  const {id} = useParams();
  console.log(id);
  
  const [product, setProduct] = useState({})

  useEffect(() => {
    showDish(id).then(setProduct).catch(console.log)
  }, [id]);

  console.log(product);

  
    return (
        <Body>
          <Container>
            <label htmlFor="name">Name</label>
            <Data> 
              {product?.name}
            </Data>
          </Container>
          <Container>
            <label htmlFor="name">Price</label>
            <Data> 
              {product?.price}
            </Data>
          </Container>
          <Container>
            <label htmlFor="name">Description (Max 150 characters)</label>
            <FieldDescription> 
              {product?.description}
            </FieldDescription>
          </Container>
          <Container>
            <label htmlFor="name">Category</label>
            <Data> 
              {product?.category}
            </Data>
          </Container>
          <Container>
            <label htmlFor="name">Picture URL</label>
            <FieldURL> 
              {product?.picture_url}
            </FieldURL>
          </Container>
          <Link to={`/products/${product.id}`}>
            <Button type="submit">
            Save
            </Button>
          </Link>
        </Body>
    );
}



export default DishForm;