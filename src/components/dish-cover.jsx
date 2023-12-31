import styled from "@emotion/styled";

const sizeOptions = {
  xs: "62px",
  sm: "130px",
  md: "241px",
};

const Cover = styled.div`
  width: ${({ size }) => sizeOptions[size]};
  height: ${({ size }) => sizeOptions[size]};
  box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  border-radius: 100%;
`;

const Img = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 100%;
  height: 100%;
`;

const DishCover = ({ src, size }) => {
  return (
    <Cover size={size}>
      <Img src={src} alt={"covers"} />
    </Cover>
  );
};

export default DishCover;