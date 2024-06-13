import React from 'react';
import {ButtonView, Image, Image2, Image3, ImageWrapper} from './styles';
import {Button, Header} from '../../components';
import {ImagesAssets} from '@assets/images';
import {AppText, Container} from '@uiKit';
import {
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@navigation/types';

export const ThirdScreen = ({
  navigation,
}: StackNavigationScreenProps<StackNavigationRoutes.ThirdScreen>) => {
  const onNextScreen = () =>
    navigation.navigate(StackNavigationRoutes.FourthScreen);

  return (
    <Container>
      <Header />
      <AppText
        marginTop={16}
        marginBottom={50}
        textAlign="center"
        variant="h4"
        text={'Upload a screenshot \nof a chat or bio'}
      />
      <ImageWrapper>
        <Image source={ImagesAssets.Screen2} />
        <Image2 source={ImagesAssets.Screen1} />
        <Image3 source={ImagesAssets.Screen3} />
      </ImageWrapper>
      <ButtonView>
        <Button onPress={onNextScreen} text="Upload Screenshot" />
      </ButtonView>
    </Container>
  );
};
