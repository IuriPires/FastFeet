import styled from 'styled-components/native';

export const Container = styled.View`
  height: 184px;
  width: 100%;
  background-color: #4c33cc;
  padding: 24px;
  z-index: 2;
`;

export const UserNameWrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  text-align: left;
`;

export const UserName = styled.Text`
  font-size: 15px;
  color: #fff;
  line-height: 20px;
  max-width: 134px;
`;

export const PlaceTextWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlaceText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 5px;
`;

export const DeliveryWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

export const DeliveryText = styled.Text`
  font-weight: 700;
  font-size: 32px;
  color: #fff;
`;

export const InputWrapper = styled.View`
  margin-top: 32px;
  bottom: 0;
  width: 100%;
  justify-content: center;
  box-shadow: 0px 8px 24px rgba(21, 6, 51, 0.08);
`;
