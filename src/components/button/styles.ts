import styled from 'styled-components/native';
import {Colors} from '@uiKit';

export const ButtonView = styled.TouchableOpacity<{isLeftText?: boolean}>`
  background-color: ${Colors.GREEN};
  padding: 15px 30px;
  border-radius: 30px;
  align-items: ${props => (props.isLeftText ? 'none' : 'center')};
  margin-top: 20px;
  width: 100%;
`;
