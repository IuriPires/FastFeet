import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #4c33cc;
  padding: 32px;
`;

export const Logo = styled.Image`
  width: 100%;
  margin-top: 35px;
`;

export const ForgotPasswordWrapper = styled.View`
  width: 100%;
  margin-top: 85px;
`;

export const Forgot = styled.Text`
  color: #ffc042;
  font-size: 48px;
  font-weight: bold;
`;

export const YourPassword = styled.Text`
  color: #fff;
  font-size: 48px;
  font-weight: bold;
`;

export const SecurityReasonsWrapper = styled.View`
  margin-top: 24px;
  max-width: 75%;
`;

export const SecurityReasons = styled.Text`
  font-size: 15px;
  color: #fff;
  line-height: 25px;
`;

export const AddressWrapper = styled.View`
  margin-top: 64px;
  flex-direction: column;
  max-width: 70%;
`;

export const Address = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
`;

export const AddressDescription = styled.Text`
  font-size: 15px;
  line-height: 25px;
  color: #fff;
`;

export const LoginBackWrapper = styled.View`
  margin-top: 126px;
  justify-content: space-between;
  flex-direction: row;
`;

export const LoginBackText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  color: #fff;
`;
