import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Container } from './styles';

import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Container>
      <NavigationContainer>
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default Routes;
