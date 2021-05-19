import styled from "styled-components";
import {COLORS} from "../variables";

const Button = styled.button.attrs(() => ({
    type: 'button'
}))`
  padding: 17px 59px 18px;

  font-size: 16px;
  line-height: 20px;
  color: $text-color;
  text-align: center;

  border: 1px solid transparent;
  border-radius: 43px;
  background-color: ${COLORS.BUTTON_BG};
  box-shadow: 0 4px 4px ${COLORS.BUTTON_SHADOW};

  cursor: pointer;
  transition: opacity 0.3s ease-in-out;

  :hover,
  :focus {
    opacity: 0.5;
  }
`;

export default Button;
