import {ColorValue, TextProps, TextStyle} from 'react-native';

type Variant = 'p1' | 'p2' | 'p3' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1';

interface TypographyProps extends Omit<TextProps, 'fontWeight'> {
  variant?: Variant;
  color?: ColorValue;
  fontWeight?: TextStyle['fontWeight'];
  fontSize?: TextStyle['fontSize'];
  textAlign?: TextStyle['textAlign'];
  lineHeight?: TextStyle['lineHeight'];
  textDecorationLine?: TextStyle['textDecorationLine'];
  width?: TextStyle['width'];
  marginTop?: TextStyle['marginTop'];
  marginBottom?: TextStyle['marginBottom'];
  marginLeft?: TextStyle['marginLeft'];
  marginRight?: TextStyle['marginRight'];
  fontFamily?: TextStyle['fontFamily'];
  text: string;
}

export type {TypographyProps, Variant};
