import { css } from 'styled-components';

export const search = css`
  &.ui.input {
    display: block;
    max-width: 380px;
    margin: 0 auto;
  }
  input {
    width: 100%;
  }
  & > .results {
    min-width: 380px;
    right: 0;
    margin: 0 auto;
    max-height: 345px;
    overflow-y: auto;
    overflow-x: hidden;
  }
`;
