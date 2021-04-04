import React from 'react';

import { Container, TextInput, Separator } from './styles';
import Icon from '../Icons';

import { TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
  icon?: string;
  iconDirection?: string;
  iconColor?: string;
  separator?: boolean;
}

const Input: React.FC<InputProps> = ({
  icon,
  iconDirection = 'left',
  iconColor = '#FFC042',
  separator = true,
  ...rest
}) => {
  return (
    <Container iconDirection={iconDirection}>
      {icon && <Icon name={icon} size={24} color={iconColor} />}
      {separator && <Separator />}
      <TextInput {...rest} />
    </Container>
  );
};

export default Input;
