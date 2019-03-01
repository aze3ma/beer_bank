import * as React from 'react';
import { Grid } from 'semantic-ui-react';
import ContentWrapper from '../../components/ContentWrapper';
import Card from '../../components/Card';
import Header from '../../components/Header';

interface FavouritePageState {
  favouriteBeers?: Array<any>;
}

class FavouritePage extends React.PureComponent<{}, FavouritePageState> {
  state: FavouritePageState = {
    favouriteBeers: [],
  };

  render() {
    return (
      <>
        <Header withSearch={false} />
        <ContentWrapper>
          <Grid columns={3}>
            {JSON.parse(localStorage.getItem('favouriteBeers') || '').map(beerItem => (
              <Grid.Column key={beerItem.id} largeScreen={5} mobile={16} tablet={8}>
                <Card key={beerItem.id} {...beerItem} />
              </Grid.Column>
            ))}
          </Grid>
        </ContentWrapper>
      </>
    );
  }
}

export default FavouritePage;
