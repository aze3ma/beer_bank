import * as React from 'react';
import styled from 'styled-components';
import { Rating, RatingProps } from 'semantic-ui-react';

import * as style from './Card.style';

interface CardProps extends RatingProps {
  id: number;
  title: string;
  description: string;
  image: string;
  isFav: boolean;
  className?: string;
}

const Card: React.StatelessComponent<CardProps> = (props: CardProps) => {
  return (
    <div className={props.className}>
      <div className="product-image">
        <img src={props.image} alt={props.title} />
      </div>
      <Rating icon="star" size="tiny" active={props.isFav ? 'active' : ''} onClick={props.onRate} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default styled(Card)`
  ${style.card}
`;
