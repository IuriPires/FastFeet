import React from 'react';

import {
  Container,
  Logo,
  Forgot,
  YourPassword,
  ForgotPasswordWrapper,
  SecurityReasonsWrapper,
  SecurityReasons,
  AddressWrapper,
  Address,
  AddressDescription,
  LoginBackWrapper,
  LoginBackText,
} from './styles';

import { TouchableOpacity } from 'react-native';

import Icons from '../../components/Icons';
import iconsHelper from '../../components/Icons/iconsHelper';

import LogoPNG from '../../assets/images/logo.png';

const ForgotPassword: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Logo source={LogoPNG} defaultSource={LogoPNG} />

      <ForgotPasswordWrapper>
        <Forgot>Esqueceu,</Forgot>
        <YourPassword>sua senha?</YourPassword>
      </ForgotPasswordWrapper>

      <SecurityReasonsWrapper>
        <SecurityReasons>
          Por motivos de segurança, para recuperá-la, vá até a central
          distribuidora da FastFeet.
        </SecurityReasons>
      </SecurityReasonsWrapper>

      <AddressWrapper>
        <Address>ENDEREÇO</Address>
        <AddressDescription>
          Rua Guilherme Gemballa, 260 Jardim América , SC 89 168-000
        </AddressDescription>
      </AddressWrapper>

      <TouchableOpacity onPress={() => navigation.push('Login')}>
        <LoginBackWrapper>
          <Icons name={iconsHelper.arrowLeft} color="#FFC042" />
          <LoginBackText>Voltar para Login</LoginBackText>
        </LoginBackWrapper>
      </TouchableOpacity>
    </Container>
  );
};

export default ForgotPassword;
