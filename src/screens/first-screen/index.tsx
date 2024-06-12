import React from 'react';
import {Container} from './styles';
import {AppText, Colors, Fonts} from '@uiKit';

export const FirstScreen = () => {
  return (
    <Container>
      <AppText
        fontFamily={Fonts.Syncopate}
        variant="h1"
        color={Colors.ROSE}
        text="RIZZGPT"
      />
    </Container>
  );
};
