import * as React from 'react';

import { Grid } from 'semantic-ui-react';
import ContentWrapper from '../../components/ContentWrapper';
import Card from '../../components/Card';
import Header from '../../components/Header';

import PunkAPI from '../../utils/PunkAPI';

interface HomePageState {
  searchTerm: string;
  beers: Array<any>;
}

class HomePage extends React.PureComponent<{}, HomePageState> {
  state: HomePageState = {
    searchTerm: '',
    beers: [],
  };

  resetComponent = () => this.fetchAllBeers();

  componentDidMount = () => {
    this.fetchAllBeers();
  };

  fetchAllBeers = () => {
    PunkAPI.endpoints.beers
      .getAll()
      .then(({ data }) => {
        const beers = data.map(beerItem => ({
          id: beerItem.id,
          title: beerItem.name,
          description: beerItem.tagline,
          image: beerItem.image_url,
          isFav: false,
        }));
        this.setState({ beers });
      })
      .catch(error => {
        throw new Error(error);
      });
  };

  handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
    setTimeout(() => {
      if (this.state.searchTerm.length < 1) return this.resetComponent();
      this.setState({
        beers: this.state.beers.filter(
          beerItem =>
            `${beerItem.title} ${beerItem.description}`
              .toUpperCase()
              .indexOf(this.state.searchTerm.toUpperCase()) >= 0,
        ),
      });
    }, 350);
  };

  handleRateChange = (id: number) => {
    this.setState(
      {
        beers: this.state.beers.map(beerItem => {
          if (beerItem.id === id) {
            beerItem.isFav = true;
          }
          return beerItem;
        }),
      },
      () => {
        localStorage.setItem(
          'favouriteBeers',
          JSON.stringify(this.state.beers.filter(beerItem => beerItem.isFav === true)),
        );
      },
    );
  };

  render() {
    console.log(this.props);
    const { beers } = this.state;
    return (
      <>
        <Header onChange={this.handleSearchTermChange} withSearch />
        <ContentWrapper>
          <Grid columns={3}>
            {beers.map(beerItem => (
              <Grid.Column key={beerItem.id} largeScreen={5} mobile={16} tablet={8}>
                <Card
                  key={beerItem.id}
                  {...beerItem}
                  onRate={() => this.handleRateChange(beerItem.id)}
                />
              </Grid.Column>
            ))}
          </Grid>
        </ContentWrapper>
      </>
    );
  }
}

export default HomePage;

/* <Grid.Column key={beerItem.id}>
<Card
  key={beerItem.id}
  {...beerItem}
  onRate={() => this.handleRateChange(beerItem.id)}
/>
</Grid.Column> */
