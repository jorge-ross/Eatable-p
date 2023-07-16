import styled from '@emotion/styled';
import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { editDish } from '../services/dish-service';
import { typography } from '../styles/typography';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const Name = styled.div`
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

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  price: Yup.number().required('Price is required'),
  description: Yup.string().required('Description is required'),
  category: Yup.string().required('Category is required'),
  image: Yup.mixed().test('image', 'URL of Image is required', value => {
    return value && value instanceof File;
  }),
});

const DishForm = () => {
  const {id} = useParams();
  console.log(id);
  const [product, setProduct] = useState(id)

  useEffect(() => {
    editDish(id).then(setProduct).catch(console.log)
  }, [id]);
  console.log(product);

  // const initValues = () => {
  //   const formik = useFormik({
  //     initialValues: {
  //       name: '',
  //       lastName: '',
  //       email: '',
  //     },
  //     onSubmit: values => {
  //       alert(JSON.stringify(values, null, 2));
  //     },
  //   });
  
  return (
    <Formik>
      <Body>
        <Form>
          <Name>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name"
             style={{ borderBottom: '1px solid black', 
             borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
             />
            <ErrorMessage name="name" component="div" />
          </Name>

          <Price>
            <label htmlFor="price">Price</label>
            <Field type="text" id="price" name="price"
            style={{ borderBottom: '1px solid black', 
            borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
             />
            <ErrorMessage name="price" component="div" />
          </Price>

          <Description>
            <label htmlFor="Description">Description</label>
            <FieldDescription as="textarea" id="description" name="description"
            style={{ borderBottom: '1px solid black', 
            borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
             /> 
            <ErrorMessage name="description" component="div" />
          </Description>

          <Category>
            <label htmlFor="name">Category</label>
            <Field type="text" id="category" name="category" 
            style={{ borderBottom: '1px solid black', 
            borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
            />
            <ErrorMessage name="category" component="div" />
          </Category>

          <URLText>
            <label htmlFor="picture">Picture URL</label>
            <FieldURL type="text" id="image" name="image" 
             style={{ borderBottom: '1px solid black', 
             borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}
             />
            <ErrorMessage name="image" component="div" />
          </URLText>

          <button type="submit">Save</button>
        </Form>
      </Body>
    </Formik>
  );
};


export default DishForm;