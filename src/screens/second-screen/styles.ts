import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #000;
`;

const ContentWrapper = styled.ScrollView`
  flex: 1;
  padding: 20px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

const BackButtonIcon = styled.View({
  name: 'left',
  size: 24,
  color: '#FF007A',
});

const MatchText = styled.Text`
  color: #ff007a;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  width: 100%;
`;

const FeaturesList = styled.View`
  width: 100%;
  margin-bottom: 40px;
`;

const Feature = styled.Text`
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
  text-align: center;
`;

const TrialButton = styled.TouchableOpacity`
  background-color: #0ead69;
  padding: 20px;
  border-radius: 10px;
  width: 90%;
  align-items: center;
  margin-bottom: 10px;
`;

const TrialButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const SubText = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;

export {
  SubText,
  TrialButtonText,
  TrialButton,
  Feature,
  MatchText,
  FeaturesList,
  Container,
  Header,
  BackButton,
  ContentWrapper,
  BackButtonIcon,
};
