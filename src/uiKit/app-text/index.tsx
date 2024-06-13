import React, {FC} from 'react';
import {Text} from 'react-native';
import {Colors} from '@uiKit';
import {textStyles} from './styles';
import {TypographyProps} from './types';

export const AppText: FC<TypographyProps> = ({
  variant,
  style,
  fontSize,
  textAlign,
  lineHeight,
  fontFamily,
  text,
  color,
  ...props
}) => {
  return (
    <Text
      allowFontScaling={false}
      style={[
        {
          color: color || Colors.WHITE,
        },
        variant && textStyles[variant],
        textAlign && {textAlign},
        !!fontSize && {fontSize},
        !!lineHeight && {lineHeight},
        !!fontFamily && {fontFamily},
        style,
      ]}
      {...props}>
      {text}
    </Text>
  );
};
