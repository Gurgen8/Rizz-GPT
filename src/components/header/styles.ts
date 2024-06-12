import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const HeaderView = styled(LinearGradient).attrs({
  colors: ['rgba(255, 0, 122, 1)', 'rgba(255, 0, 109, 0.1)'],
  start: {x: 0, y: 0},
  end: {x: 0, y: 1},
})`
  width: 100%;
  padding: 60px 20px 20px 20px;
  align-items: center;
  height: 200px;
`;

const HeaderRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 16px;
`;

export {HeaderRow, HeaderView};
