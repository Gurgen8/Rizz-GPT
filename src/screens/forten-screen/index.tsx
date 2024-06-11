import React from 'react';
import {
  Container,
  GradientBackground,
  BackButton,
  PlusButton,
  ScreenshotContainer,
  Header,
  Title,
  Footer,
  CopyTextButton,
  CopyText,
} from './styles';
import {Text} from 'react-native';

export const ForthScreen = () => {
  return (
    <Container>
      <GradientBackground>
        <Header>
          <BackButton>
            <Text style={{color: 'white'}}>{'<'}</Text>
          </BackButton>
          <Title>RIZZ GPT</Title>
          <PlusButton>
            <Text style={{color: 'white'}}>+</Text>
          </PlusButton>
        </Header>
      </GradientBackground>
      <ScreenshotContainer>
        <Text>User's screenshot</Text>
      </ScreenshotContainer>
      <Footer>
        <CopyTextButton>
          <CopyText>Lorem ipsum dolor sit amet</CopyText>
        </CopyTextButton>
      </Footer>
    </Container>
  );
};
