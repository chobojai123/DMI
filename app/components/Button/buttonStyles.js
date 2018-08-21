import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 200px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-weight: bold;
  font-size: 80%;
  border: 1px solid #fff;
  background-color: #3a5169;
  color: #fff;

  &:active {
    background: #2e4053;
    color: #fff;
  }
`;

export default buttonStyles;
