import styled, { css } from 'styled-components/native';

interface LineCardProps {
  lineTextColor: string;
}

export const Container = styled.View`
  width: 327px;
  height: 184px;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px 0 0 0;
  box-shadow: 0px 8px 24px rgba(21, 6, 51, 0.08);
  position: relative;
  margin: 10px;
`;

export const PackageImage = styled.Image`
  width: 24px;
  height: 24px;
`;

export const PackageTitleWrapper = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const SectionOneWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
`;

export const PackageTitle = styled.Text`
  font-size: 22px;
  font-weight: 700;
  color: #4c4766;
  margin-left: 14px;
`;

export const PackageDate = styled.Text`
  font-size: 10px;
  font-weight: 500;
  color: #6f6c80;
`;

export const LineWrapper = styled.View`
  align-items: center;
  /* border: 1px solid red; */
  margin-top: 30px;
`;

export const LineTextsWrapper = styled.View`
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
`;

export const LineTexts = styled.Text<LineCardProps>`
  ${props =>
    props.lineTextColor &&
    css`
      color: ${props.lineTextColor};
    `}
  font-size: 10px;
  font-weight: bold;
`;

export const DetailsBoxWrapper = styled.TouchableOpacity`
  background-color: #fff1d6;
  flex-direction: row;
  justify-content: space-between;
  height: 48px;
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 16px;
`;

export const DetailText = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: #4c4766;
`;
