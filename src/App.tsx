import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import RNBootSplash from 'react-native-bootsplash';

import Routes from './routes';

const Fastfeet: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return <Routes />;
};

export default Fastfeet;
