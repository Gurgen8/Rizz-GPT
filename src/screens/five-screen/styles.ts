import styled from 'styled-components/native';
import {Colors} from '@uiKit';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.BACKGROUND};
`;

const Wrapper = styled.View`
  margin-top: -42px;
  flex: 1;
`;

const Footer = styled.View`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export {Container, Wrapper, Footer};
