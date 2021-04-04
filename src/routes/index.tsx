import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { StatusBar } from 'react-native';

import { Container } from './styles';

import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Container>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <Stack.Navigator headerMode={'none'}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </Container>
  );
};

export default Routes;
