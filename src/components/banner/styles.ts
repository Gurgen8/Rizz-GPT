import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Colors} from '@uiKit';
const {width} = Dimensions.get('window');

const Container = styled.View`
  background-color: ${Colors.BACKGROUND};
  border-radius: 10px;
  align-items: 'center';
`;

const BannerContainer = styled.View`
  background-color: ${Colors.Dark_GRAY};
  padding: 16px;
  border-radius: 15px;
  align-items: center;
  border-width: 4px;
  border-color: ${Colors.GREEN};
  width: 100%;
`;

const styles = StyleSheet.create({
  maskedView: {
    flex: 1,
    flexDirection: 'row',
    height: 32,
    marginTop: 16,
  },
  maskElement: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
  },
  miniButton: {
    borderRadius: 30,
    paddingHorizontal: 16,
    position: 'absolute',
    zIndex: 9,
    right: width / 3.5,
    top: -10,
  },
});

export {Container, BannerContainer, styles};
