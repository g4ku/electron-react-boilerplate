import { css } from 'emotion';

export const backButton = css`
  position: absolute;
`;

export const counter = css`
  position: absolute;
  top: 30%;
  left: 45%;
  font-size: 10rem;
  font-weight: bold;
  letter-spacing: -0.025em;
`;

export const btnGroup = css`
  position: relative;
  top: 500px;
  width: 480px;
  margin: 0 auto;
`;

export const btn = css`
  font-size: 1.6rem;
  font-weight: bold;
  background-color: #fff;
  border-radius: 50%;
  margin: 10px;
  width: 100px;
  height: 100px;
  opacity: 0.7;
  cursor: pointer;
  font-family: Arial, Helvetica, Helvetica Neue, sans-serif;

  &:hover {
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;