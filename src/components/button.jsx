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