import React, {FC, memo} from 'react';
import {ButtonView, ShadowStyles} from './styles';
import {LocalProps} from './types';
import {AppText} from '@uiKit';
import {View} from 'react-native';

export const Button: FC<LocalProps> = memo(({text, isLeftText, onPress}) => {
  const renderLightShadow = () => (
    <View style={ShadowStyles}>
      <ButtonView
        style={ShadowStyles}
        onPress={onPress}
        isLeftText={isLeftText}>
        <AppText variant="h5" text={text} />
      </ButtonView>
    </View>
  );

  return isLeftText ? (
    renderLightShadow()
  ) : (
    <ButtonView style={ShadowStyles} onPress={onPress}>
      <AppText variant="h5" text={text} />
    </ButtonView>
  );
});
