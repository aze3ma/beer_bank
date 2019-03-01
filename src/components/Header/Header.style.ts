import { css } from 'styled-components';

export const header = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;

  .ui.segment {
    background-color: #ff8c40;
    min-height: 280px;
    height: 280px;
  }
  nav {
    margin-bottom: 45px;
  }
  .ui.header {
    text-align: center;
    color: #ffffff;
  }
  h1.ui.header {
    font-size: 48px;
    margin: 0;
  }
  h2.ui.header {
    font-size: 16px;
    margin: 0;
    margin-bottom: 20px;
  }
`;
