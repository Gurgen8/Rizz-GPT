import {TouchableOpacity} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {styled} from 'styled-components/native';

const ScreenshotContainer = styled(DropShadow)`
  width: 100px;
  height: 150px;
  background-color: #333;
  border-radius: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
`;

const ScreenshotText = styled.Text`
  color: white;
  font-size: 12px;
`;

const DeleteButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 10px;
`;

export {DeleteButton, ScreenshotText, ScreenshotContainer};
