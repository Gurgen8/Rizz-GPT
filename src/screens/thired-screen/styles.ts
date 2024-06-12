import styled from 'styled-components/native';
import {Colors} from '@uiKit';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
`;

const Footer = styled.View`
  width: 100%;
  padding: 0 20px;
`;

const ImageWrapper = styled.View`
  height: 250px;
  align-items: center;
  margin-bottom: 50px;
`;

const Image = styled.Image`
  width: 110px;
  height: 200px;
  border-width: 0.75px;
  border-color: ${Colors.WHITE};
  border-radius: 10px;
  position: absolute;
  z-index: 2;
`;

const Image2 = styled(Image)`
  transform: rotate(15deg);
  z-index: 3;
  left: 10px;
  top: 10px;
`;

const Image3 = styled(Image)`
  transform: rotate(-15deg);
  z-index: 1;
  right: 10px;
  top: 10px;
`;

export {ImageWrapper, Footer, Container, Image2, Image3, Image};
