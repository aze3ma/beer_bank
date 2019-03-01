import { css } from 'styled-components';

export const navbar = css`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  li {
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    transition: 0.15s all ease-in;
    &:hover {
      text-decoration: underline;
    }
    a {
      color: inherit;
    }
  }
  li + li {
    margin-left: 25px;
  }
`;
