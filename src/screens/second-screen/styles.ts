import styled from 'styled-components/native';

const HeaderView = styled.View`
  margin-top: -50px;
`;

const FeaturesList = styled.View`
  width: 100%;
  margin-bottom: 50px;
  align-items: center;
`;

const Pressable = styled.TouchableOpacity`
  z-index: 9;
`;
const ListContent = {
  padding: 20,
};

export {FeaturesList, Pressable, ListContent, HeaderView};
