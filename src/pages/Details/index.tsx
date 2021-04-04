import React from 'react';
import { View } from 'react-native';

import { Container, Header, ScreenName } from './styles';
import Icons from '../../components/Icons';
import iconHelper from '../../components/Icons/iconsHelper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Details: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name={iconHelper.arrowLeft} color="#fff" size={20} />
        </TouchableOpacity>

        <ScreenName>Detalhes</ScreenName>
      </Header>
    </Container>
  );
};

export default Details;
