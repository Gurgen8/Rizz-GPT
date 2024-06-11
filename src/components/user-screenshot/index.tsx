import React from 'react';
import {Text} from 'react-native';
import {DeleteButton, ScreenshotContainer, ScreenshotText} from './styles';

export const ScreenshotItem = ({item}) => (
  <ScreenshotContainer>
    <ScreenshotText>{item}</ScreenshotText>
    <DeleteButton>
      <Text style={{color: '#000'}}>X</Text>
    </DeleteButton>
  </ScreenshotContainer>
);
