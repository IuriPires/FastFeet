import React from 'react';

import {
  Container,
  DeliverMan,
  Logo,
  TextWrapper,
  TextComplement,
  LoginText,
} from './styles';

import LogoPNG from '../../assets/images/logo.png';

const Login: React.FC = () => {
  return (
    <Container>
      <Logo source={LogoPNG} defaultSource={LogoPNG} />

      <TextWrapper>
        <DeliverMan>Entregador,</DeliverMan>
        <TextComplement>você é nosso maior valor</TextComplement>
        <LoginText>Faça seu login para começar suas entregas.</LoginText>
      </TextWrapper>
    </Container>
  );
};

export default Login;
