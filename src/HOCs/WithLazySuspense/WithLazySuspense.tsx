import * as React from 'react';
import Spinner from '../../components/Spinner';

function WithLazySuspense(Component: React.LazyExoticComponent<any>) {
  return (props: any) => (
    <React.Suspense
      fallback={
        <Spinner active={true} size="large">
          Loading
        </Spinner>
      }
    >
      <Component {...props} />
    </React.Suspense>
  );
}

export default WithLazySuspense;
