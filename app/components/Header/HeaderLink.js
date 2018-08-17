import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export default styled(Link)`
  display: inline-block;
  padding: 10px 30px;
  font-weight: 300;
  text-decoration: none;
  border-radius: 200px;
  user-select: none;
  cursor: pointer;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 18px;
  border: 1px solid #fff;
  color: #fff;
  background-color: transparent;
  margin: 25px 15px;

  ${props =>
    props.primary &&
    css`
      background: #3a5169;
      color: #fff;
    `} &:active,
  &:hover {
    color: #1c3e9b;
  }
`;
