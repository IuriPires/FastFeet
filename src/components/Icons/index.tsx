import React from 'react';
import { createIconSet } from 'react-native-vector-icons';

import AwesomeIcons from './assets/awesome-icons.json';

export interface IIconProps {
  name: string;
  size?: number;
  color?: string;
}

const RNIcon = createIconSet(
  AwesomeIcons,
  'awesome-icons',
  'awesome-icons.ttf',
);

const Icon: React.FC<IIconProps> = ({ name, size, color }) => {
  return <RNIcon name={name} size={size || 30} color={color || '#000'} />;
};

export default Icon;
