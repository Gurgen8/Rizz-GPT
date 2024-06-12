import {TouchableOpacity} from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import {styled} from 'styled-components/native';
import {Colors} from '@uiKit';

const ShadowStyles = {
  shadowColor: 'white',
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 1,
  shadowRadius: 3,
};

const ScreenshotContainer = styled(DropShadow)`
  width: 100px;
  height: 150px;
  border-radius: 10px;
  margin: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.BACKGROUND};
`;

const DeleteButton = styled(TouchableOpacity)`
  position: absolute;
  bottom: 10px;
  right: 10px;
  justify-content: center;
  align-items: center;
`;

export {DeleteButton, ShadowStyles, ScreenshotContainer};
