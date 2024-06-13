import React from 'react';
import {DeleteButton, ScreenshotContainer} from './styles';
import {LocalProps} from './types';
import {AppText, ShadowStyles} from '@uiKit';

export const ScreenshotItem = ({item}: LocalProps) => (
  <ScreenshotContainer style={ShadowStyles}>
    <AppText variant="p2" textAlign="center" text={item} />
    <DeleteButton>
      <AppText variant="p3" text="X" />
    </DeleteButton>
  </ScreenshotContainer>
);
