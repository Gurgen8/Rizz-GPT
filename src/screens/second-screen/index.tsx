import React from 'react';
import {
  BackButton,
  BackButtonIcon,
  Container,
  ContentWrapper,
  Feature,
  FeaturesList,
  Header,
  MatchText,
  SubText,
  TrialButton,
  TrialButtonText,
} from './styles';
import {MatchIcon} from '../../assets/svgs';

export const SecondScreen = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <BackButton>
            <BackButtonIcon />
          </BackButton>
          <MatchIcon width={320} height={300} />
        </Header>
        <FeaturesList>
          <Feature>Unlimited Rizz</Feature>
          <Feature>Coach Recommended</Feature>
          <Feature>Proven to Get Dates</Feature>
          <Feature>x10 More Responses</Feature>
          <Feature>x8 More Dates</Feature>
        </FeaturesList>
        <TrialButton>
          <TrialButtonText>Elevate Your Game</TrialButtonText>
          <TrialButtonText>Unlock Free Trial</TrialButtonText>
        </TrialButton>
        <SubText>risk-free trial then $8.67/week</SubText>
      </ContentWrapper>
    </Container>
  );
};
