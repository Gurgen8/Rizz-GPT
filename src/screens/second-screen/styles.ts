import styled from 'styled-components/native';
import {Colors} from '@uiKit';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.BACKGROUND};
  align-items: center;
`;

const HeaderView = styled.View`
  margin-top: -50px;
`;

const FeaturesList = styled.View`
  width: 100%;
  margin-bottom: 50px;
  align-items: center;
`;

export {FeaturesList, HeaderView, Container};
