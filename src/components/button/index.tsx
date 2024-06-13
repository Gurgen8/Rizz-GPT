import React, {FC, memo} from 'react';
import {ButtonView} from './styles';
import {LocalProps} from './types';
import {AppText} from '@uiKit';

export const Button: FC<LocalProps> = memo(({text, isLeftText, onPress}) => {
  return (
    <ButtonView onPress={onPress} isLeftText={isLeftText}>
      <AppText variant="h5" text={text} />
    </ButtonView>
  );
});
