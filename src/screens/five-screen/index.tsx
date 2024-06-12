import React from 'react';
import {FlatList} from 'react-native';
import {Button, Header, ScreenshotItem} from '../../components';
import {Container, Footer, Wrapper} from './styles';
const screenshots = new Array(9).fill("User's screenshot");

export const FiveScreen = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <FlatList
          data={screenshots}
          renderItem={ScreenshotItem}
          keyExtractor={(_item, index) => index.toString()}
          numColumns={3}
        />
      </Wrapper>
      <Footer>
        <Button text="Upload Screenshot" />
      </Footer>
    </Container>
  );
};
