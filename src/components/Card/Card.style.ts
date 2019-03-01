import { css } from 'styled-components';

export const card = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 35px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  .product-image {
    width: 150px;
    height: 150px;
  }
  .product-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .ui.rating {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 18px;
  }
  h3 {
    font-size: 16px;
  }
  p {
    font-size: 14px;
  }
`;
