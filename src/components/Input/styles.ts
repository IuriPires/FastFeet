import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  border-radius: 4px;
  background-color: #f7f5fa;
  flex-direction: row;
  padding: 0 20px 0 20px;
  align-items: center;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  background-color: transparent;
  flex: 1;
  font-size: 16px;
  margin-left: 5px;
`;

export const Separator = styled.View`
  width: 1px;
  height: 24px;
  background-color: #dad7e0;
  margin-left: 15px;
  margin-right: 15px;
`;
