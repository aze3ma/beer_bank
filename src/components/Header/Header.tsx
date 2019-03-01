import * as React from 'react';
import { Container, Segment, Header as Heading } from 'semantic-ui-react';
import styled from 'styled-components';
import Navbar from '../Navbar';
import Search from '../Search';
import * as style from './Header.style';

export interface HeaderProps {
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  withSearch?: boolean;
}

const Header: React.StatelessComponent<HeaderProps> = (props: HeaderProps) => {
  console.log(props);
  return (
    <div className={props.className}>
      <Segment>
        <Container>
          <Navbar />
          <Heading as="h1">The Beer Bank</Heading>
          <Heading as="h2">Find your favourite beer here</Heading>
          {props.withSearch && <Search onChange={props.onChange} />}
        </Container>
      </Segment>
    </div>
  );
};

export default styled(Header)`
  ${style.header}
`;
