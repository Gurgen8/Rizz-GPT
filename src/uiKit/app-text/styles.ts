import {StyleSheet} from 'react-native';
import {Fonts} from '@uiKit';

export const textStyles = StyleSheet.create({
  h1: {
    fontFamily: Fonts.Syncopate,
    fontSize: 32,
    fontWeight: '800',
    letterSpacing: -0.84,
    lineHeight: 42,
  },
  h2: {
    fontSize: 28,
    fontWeight: '400',
    letterSpacing: -0.64,
    lineHeight: 40,
  },
  h3: {
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 36,
  },
  h4: {
    fontSize: 22,
    fontWeight: '400',
    lineHeight: 25.2,
  },
  h5: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.36,
    lineHeight: 32,
  },
  h6: {
    fontSize: 18,
    fontWeight: '400',
    letterSpacing: -0.36,
    lineHeight: 34,
  },
  p1: {
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 32,
  },
  p2: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: -0.36,
    lineHeight: 18,
  },
  p3: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: -0.36,
    lineHeight: 22,
  },
});
