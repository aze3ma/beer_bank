import * as React from 'react';
import styled from 'styled-components';
import { Container } from 'semantic-ui-react';

import * as style from './ContentWrapper.style';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.StatelessComponent<CardProps> = ({ className, children }) => {
  return <Container className={className}>{children}</Container>;
};

export default styled(Card)`
  ${style.contentWrapper}
`;
