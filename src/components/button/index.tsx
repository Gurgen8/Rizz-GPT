import React, {FC, memo} from 'react';
import {ButtonView} from './styles';
import {LocalProps} from './types';
import {AppText} from '@uiKit';

export const Button: FC<LocalProps> = memo(({text, isLeftText}) => {
  return (
    <ButtonView isLeftText={isLeftText}>
      <AppText variant="h5" text={text} />
    </ButtonView>
  );
});
