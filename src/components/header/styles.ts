import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const Container = styled.View`
  flex: 1;
  background-color: #000;
  align-items: center;
`;

const HeaderView = styled(LinearGradient).attrs({
  colors: ['rgba(255, 0, 122, 1)', 'rgba(255, 0, 109, 0.1)'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
})`
  width: 100%;
  padding: 60px 20px 20px 20px;
  align-items: center;
  height: 160px;
`;

const HeaderText = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.Text`
  color: #fff;
  font-size: 18px;
  text-align: center;
  margin: 20px 0;
`;

const ImageWrapper = styled.View`
  margin: 20px 0;
`;

const Button = styled.TouchableOpacity`
  background-color: #0ead69;
  padding: 15px 30px;
  border-radius: 30px;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
export {
  HeaderText,
  ButtonText,
  Button,
  ImageWrapper,
  Description,
  Container,
  HeaderView,
};
