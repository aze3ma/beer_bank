import * as React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

interface SpinnerProps {
  active: boolean;
  size?: 'tiny' | 'mini' | 'small' | 'medium' | 'large' | 'big' | 'huge' | 'massive';
  children?: React.ReactNode;
}

const Spinner: React.StatelessComponent<SpinnerProps> = ({ active, size, children }) => {
  return (
    <Dimmer active={active}>
      <Loader active={active} size={size}>
        {children}
      </Loader>
    </Dimmer>
  );
};

export default Spinner;
