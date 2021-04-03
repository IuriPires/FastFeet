import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding-top: ${getStatusBarHeight()}px;
  flex: 1;
  background-color: #4c33cc;
`;
