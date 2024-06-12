import React from 'react';
import {Container, Footer, Image, Image2, Image3, ImageWrapper} from './styles';
import {Button, Header} from '../../components';
import {ImagesAssets} from '@assets/images';
import {AppText} from '@uiKit';

export const ThirdScreen = () => {
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
      <Footer>
        <Button text="Upload Screenshot" />
      </Footer>
    </Container>
  );
};
