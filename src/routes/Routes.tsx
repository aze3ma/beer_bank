import * as React from 'react';
import { BrowserRouterProps, Switch, Route } from 'react-router-dom';

import WithLazySuspense from '../HOCs/WithLazySuspense';

// Lazy Loaded Components
const LazyHomePage = React.lazy(() => import('../containers/HomePage'));
const LazyFavouritePage = React.lazy(() => import('../containers/FavouritePage'));
const LazyPageNotFound = React.lazy(() => import('../containers/PageNotFound'));

const Routes: React.StatelessComponent<BrowserRouterProps> = (props: BrowserRouterProps) => {
  return (
    <Switch>
      <Route exact path="/" component={WithLazySuspense(LazyHomePage)} />
      <Route path="/favourite" component={WithLazySuspense(LazyFavouritePage)} />
      <Route path="*" component={WithLazySuspense(LazyPageNotFound)} />
    </Switch>
  );
};

export default Routes;
