import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  UserName,
  UserNameWrapper,
  DeliveryWrapper,
  PlaceText,
  PlaceTextWrapper,
  DeliveryText,
  InputWrapper,
} from './styles';
import Icons from '../Icons';
import iconHelper from '../Icons/iconsHelper';
import Input from '../Input';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface HeaderProps {
  userName: string;
  place: string;
  navigation: unknown;
}

const HeaderDelivery: React.FC<HeaderProps> = ({
  userName = 'Iuri Pires',
  place = 'Barueri - SP',
  navigation,
}) => {
  return (
    <Container>
      <UserNameWrapper>
        <UserName>
          Bem-vindo,{'\n'} {userName}
        </UserName>
        <TouchableOpacity onPress={() => navigation.push('Login')}>
          <Icons name={iconHelper.signOut} color="#FFC042" />
        </TouchableOpacity>
      </UserNameWrapper>

      <DeliveryWrapper>
        <DeliveryText>Entregas</DeliveryText>
        <PlaceTextWrapper>
          <Icons name={iconHelper.mapPin} color="#FFC042" size={20} />
          <PlaceText>{place}</PlaceText>
        </PlaceTextWrapper>
      </DeliveryWrapper>

      <InputWrapper>
        <Input
          icon={iconHelper.magnifyingGlass}
          iconDirection="right"
          iconColor="#BEBCCC"
          placeholder="Filtrar por bairro"
          separator={false}
        />
      </InputWrapper>
    </Container>
  );
};

export default HeaderDelivery;
