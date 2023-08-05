import styled from "@emotion/styled";
import { typography } from "../styles/typography";

export const Button = styled.button`
  ${typography.text.lg}
  color: white;
  display: flex;
  justify-content: center;
  padding: 8px;
  align-items: center;
  border-radius: 30px;
  background: #FA4A0C;
  width: 310px;
  height: 70px;
  padding: 12px 16px;
  position: absolute;
  bottom: 12px;
  border: none;
  cursor: pointer;
  left: 50%;
  transform: translateX(-50%);
`

export const DeleteButton = styled.button`
  ${typography.text.lg}
  width: 230px;
  height: 47px;
  color: white;
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  background: #FA4A0C;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`

export const CancelButton = styled.button`
  ${typography.text.lg}
  width: 230px;
  height: 47px;
  color: white;
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  background: #EFB60E;
  border: none;
  border-radius: 30px;
  cursor: pointer;
`