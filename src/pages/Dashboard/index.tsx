import React, { useState } from 'react';

import { Container, FlatWrapper, FlatListStyled } from './styles';

import HeaderDelivery from '../../components/HeaderDelivery';
import PackageCard from '../../components/PackageCard';

const Dashboard: React.FC = ({ navigation }) => {
  const [packages, setPackages] = useState([
    {
      packageName: 'Pacote 1',
      packageDate: '23/06/2020',
      id: '1',
    },
    {
      packageName: 'Pacote 2',
      packageDate: '15/06/2020',
      id: '2',
    },
    {
      packageName: 'Pacote 3',
      packageDate: '14/06/2020',
      id: '3',
    },
    {
      packageName: 'Pacote 4',
      packageDate: '13/06/2020',
      id: '4',
    },
  ]);

  const renderItem = ({ item }) => {
    return (
      <PackageCard
        packageDate={item.packageDate}
        packageName={item.packageName}
        navigation={navigation}
      />
    );
  };
  return (
    <Container>
      <HeaderDelivery
        navigation={navigation}
        userName={'Iuri Pires'}
        place={'Barueri - SP'}
      />
      <FlatWrapper>
        <FlatListStyled
          data={packages}
          renderItem={renderItem}
          keyExtractor={package => package.id}
        />
      </FlatWrapper>
    </Container>
  );
};

export default Dashboard;
