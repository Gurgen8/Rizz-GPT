import styled from 'styled-components/native';
import {Colors} from '@uiKit';
import DropShadow from 'react-native-drop-shadow';

const ShadowStyles = {
  shadowColor: Colors.WHITE,
  shadowOffset: {
    width: -0.5,
    height: -1,
  },
  shadowOpacity: 1,
  shadowRadius: 3,
  width: 280,
};

const StartedButton = styled(DropShadow)``;

const ButtonView = styled.TouchableOpacity<{isLeftText?: boolean}>`
  background-color: ${Colors.GREEN};
  padding: 15px 30px;
  border-radius: 17px;
  align-items: ${props => (props.isLeftText ? 'none' : 'center')};
  margin-top: 20px;
  width: 100%;
`;
export {ButtonView, StartedButton, ShadowStyles};
