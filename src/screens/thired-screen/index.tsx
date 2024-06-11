import React from 'react';
import {Container, Description, ImageWrapper} from './styles';
import {Button, Header} from '../../components';

export const ThirdScreen = () => {
  return (
    <Container>
      <Header />
      <Description>{`Upload a screenshot \nof a chat or bio`}</Description>
      <ImageWrapper>
        {/* <Image
          source={require('./path/to/your/image.png')}
          style={{width: 300, height: 300, resizeMode: 'contain'}}
        /> */}
      </ImageWrapper>
      <Button />
    </Container>
  );
};
