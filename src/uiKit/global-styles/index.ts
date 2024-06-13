import {Colors} from '../colors';
import styled from 'styled-components/native';

const ShadowStyles = {
  shadowColor: Colors.WHITE,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 1,
  shadowRadius: 3,
};

const Flexible = {
  flex: 1,
};

const Container = styled.View`
  flex: 1;
  background-color: ${Colors.BACKGROUND};
  align-items: center;
`;

const SafeAreaView = styled.SafeAreaView<{isCenter?: boolean}>`
  flex: 1;
  background-color: ${Colors.BACKGROUND};
  align-items: center;
  justify-content: ${props => (props.isCenter ? 'center' : 'none')};
`;

export {ShadowStyles, Flexible, SafeAreaView, Container};
