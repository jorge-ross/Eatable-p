import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { editDish, showDish } from '../services/dish-service';
import { typography } from '../styles/typography';
import { Button } from './button';


const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Name = styled.p`
  display: flex;
  flex-direction: column;
  ${typography.text.xt}
  margin: 0;
  padding-bottom: 16px;
  gap: 5px;
`;

const Price = styled.div`
  display: flex;
  flex-direction: column;
  ${typography.text.xt}
  margin: 0;
  padding-bottom: 16px;
  gap: 5px;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  ${typography.text.xt}
  margin: 0;
  padding-bottom: 16px;
  gap: 5px;
`;

const FieldDescription = styled.div`
  height: 146px;
  ${typography.text.md}
`

const FieldURL = styled.div`
  height: 55px;
  ${typography.text.md}
`

const Category = styled.div`
  display: flex;
  flex-direction: column;
  ${typography.text.xt}
  margin: 0;
  padding-bottom: 16px;
  gap: 5px;
`;

const URLText = styled.div`
  display: flex;
  flex-direction: column;
  ${typography.text.xt}
  margin: 0;
  padding-bottom: 16px;
  gap: 5px;
`;

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
            <Name>
              <label htmlFor="name">Name</label>
            </Name>
            <p>{product?.name}</p>
            <p>{product?.price}</p>
           

            <Button type="submit">
              Save
              </Button>
        </Body>
    );
};



export default DishForm;