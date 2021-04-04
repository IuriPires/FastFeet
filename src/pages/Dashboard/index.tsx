import React from 'react';
import { View } from 'react-native';

import { Container } from './styles';

import HeaderDelivery from '../../components/HeaderDelivery';

const Dashboard: React.FC = ({ navigation }) => {
  return (
    <Container>
      <HeaderDelivery
        navigation={navigation}
        userName={'Iuri Pires'}
        place={'Barueri - SP'}
      />
    </Container>
  );
};

export default Dashboard;
