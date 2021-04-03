import React from 'react';

import { Container, TextInput, Separator } from './styles';
import Icon from '../Icons';

import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  icon?: string;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <Container>
      {icon && <Icon name={icon} size={24} color="#FFC042" />}
      <Separator />
      <TextInput {...rest} />
    </Container>
  );
};

export default Input;
