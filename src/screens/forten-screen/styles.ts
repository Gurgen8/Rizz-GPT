import {TouchableOpacity} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const GradientBackground = styled(LinearGradient).attrs({
  colors: ['#ff007f', '#7700ff'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
  width: 100%;
  align-items: center;
`;

const Header = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BackButton = styled.TouchableOpacity`
  padding: 10px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

const PlusButton = styled.TouchableOpacity`
  padding: 10px;
`;

const ScreenshotContainer = styled(DropShadow)`
  width: 80%;
  height: 60%;
  background-color: white;
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

const CopyTextButton = styled(TouchableOpacity)`
  padding: 15px 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
`;

const CopyText = styled.Text`
  color: #333;
`;

export {
  CopyText,
  CopyTextButton,
  Footer,
  Container,
  Header,
  PlusButton,
  ScreenshotContainer,
  Title,
  BackButton,
  GradientBackground,
};
