import styled from "@emotion/styled";
import background from "../assets/eatable-cover.svg";
import circle from "../assets/Ellipse.png";
import logo from "../assets/Eatable.svg";
import text from "../assets/text-e.svg";
import { Link } from "react-router-dom";

const ContainerPage = styled.div`
  margin: 0 auto;
  max-width: 414px;
  height: 896px;
  background-color: white;
  border-radius: 20px;
`

function InitPage() {
  return (
   
    <ContainerPage style={{ backgroundImage: `url(${background})`,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    }}>

    <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <img src={circle} alt="circle" />
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 12,
          }}
        >
          <img src={logo} alt="logo" style={{width: 200}} />
          <img src={text} alt="text" style={{width: 110, paddingBottom: 16}}/>
          <Link >Start Here</Link>
        </div>
    </div>
    </ContainerPage>
  )
}

export default InitPage;