import * as React from 'react';
import styled from 'styled-components';
import { Input, Icon } from 'semantic-ui-react';

import * as style from './Search.style';

interface SearchProps {
  searchTerm?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.StatelessComponent<SearchProps> = (props: SearchProps) => {
  // const [serachTerm, setSearchTerm] = React.useState('');

  // const handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(event.target.value);
  // };

  return (
    <Input className={props.className} icon placeholder="Search for beer name">
      <input
        type="text"
        name="search"
        value={props.searchTerm}
        onChange={props.onChange}
        autoComplete="off"
      />
      <Icon name="search" />
    </Input>
  );
};

export default styled(Search)`
  ${style.search}
`;
