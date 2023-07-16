import styled from "@emotion/styled";
import { typography } from "../styles/typography";
import DishForm from "../components/dish-form";


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
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding-top: 24px;
  padding-bottom: 32px;
  ${typography.text.xl}
`

function DishEdit() {
  // const {id} = useParams();
  // console.log(id);

  return (
    <ContainerPage>
      <Header>
        Edit Dish
      </Header>
      <DishForm/>
    </ContainerPage>
  )
}

export default DishEdit;