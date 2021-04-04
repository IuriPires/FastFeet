import React from 'react';

import {
  Container,
  DeliverMan,
  Logo,
  TextWrapper,
  TextComplement,
  LoginText,
  InputsWrapper,
  ForgotPassword,
} from './styles';

import { TouchableOpacity } from 'react-native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import LogoPNG from '../../assets/images/logo.png';
import iconsHelper from '../../components/Icons/iconsHelper';

const Login: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Logo source={LogoPNG} defaultSource={LogoPNG} />
      <TextWrapper>
        <DeliverMan>Entregador,</DeliverMan>
        <TextComplement>você é nosso maior valor</TextComplement>
        <LoginText>Faça seu login para começar suas entregas.</LoginText>
      </TextWrapper>

      <InputsWrapper>
        <Input icon={iconsHelper.user} placeholder="CPF" />
        <Input
          textContentType="password"
          icon={iconsHelper.lockKey}
          placeholder="Senha"
        />
      </InputsWrapper>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <ForgotPassword>Esqueci minha senha</ForgotPassword>
      </TouchableOpacity>

      <Button>Entrar</Button>
    </Container>
  );
};

export default Login;
