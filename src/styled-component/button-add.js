import styled from "styled-components";
import Button from "./button";

const ButtonAdd = styled(Button)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 36px 17px;
  
  font-weight: 700;
  
  span {
    margin-left: 12px;
  }
`;

export default ButtonAdd;
