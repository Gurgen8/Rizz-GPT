import DropShadow from 'react-native-drop-shadow';
import styled from 'styled-components/native';
import {Colors} from '@uiKit';

const ScrollView = styled.ScrollView`
  margin-top: -42px;
`;

const ScreenshotContainer = styled(DropShadow)`
  height: 500px;
  background-color: ${Colors.WHITE};
  border-radius: 10px;
  margin: 20px;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.View`
  width: 100%;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

const CopyTextView = styled.View`
  padding: 15px 20px;
  background-color: ${Colors.LIGHT_GRAY};
  border-radius: 10px;
  padding-right: 50px;
  height: 160px;
  margin-bottom: 16px;
`;

const CopyButton = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  align-items: center;
  top: 60px;
`;

export {CopyTextView, Footer, ScreenshotContainer, ScrollView, CopyButton};
