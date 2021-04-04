import React from 'react';
import { View } from 'react-native';

import {
  Container,
  PackageImage,
  PackageTitle,
  PackageTitleWrapper,
  PackageDate,
  SectionOneWrapper,
  LineWrapper,
  LineTexts,
  LineTextsWrapper,
  DetailsBoxWrapper,
  DetailText,
} from './styles';
import packageImg from '../../assets/images/package.png';
import Icons from '../Icons';
import iconsHelper from '../Icons/iconsHelper';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface PackageCardProps {
  status: {
    waiting: boolean;
    leaving: boolean;
    delivered: boolean;
  };
  packageName: string;
  packageDate: string;
}

const PackageCard: React.FC<PackageCardProps> = ({
  status,
  packageName,
  packageDate,
  navigation,
}) => {
  return (
    <Container>
      <SectionOneWrapper>
        <PackageTitleWrapper>
          <PackageImage source={packageImg} />
          <PackageTitle>{packageName}</PackageTitle>
        </PackageTitleWrapper>
        <PackageDate>{packageDate}</PackageDate>
      </SectionOneWrapper>

      <LineWrapper>
        <LineTextsWrapper>
          <LineTexts lineTextColor="#00DA6D">AGUARDANDO</LineTexts>
          <LineTexts lineTextColor="#00DA6D">RETIRANDO</LineTexts>
          <LineTexts lineTextColor="#BEBCCC">ENTREGUE</LineTexts>
        </LineTextsWrapper>
      </LineWrapper>

      <DetailsBoxWrapper onPress={() => navigation.push('Details')}>
        <DetailText>Detalhes</DetailText>
        <Icons name={iconsHelper.arrowRight} color="#6F6C80" size={15} />
      </DetailsBoxWrapper>
    </Container>
  );
};

export default PackageCard;
