import React from 'react';
import {FlatList} from 'react-native';
import {Button, Header, ScreenshotItem} from '../../components';
import {Container, Footer} from './styles';

const screenshots = new Array(9).fill("User's screenshot");

export const FiveScreen = () => {
  return (
    <Container>
      <Header />
      <FlatList
        data={screenshots}
        renderItem={ScreenshotItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={{alignItems: 'center'}}
      />
      <Footer>
        <Button />
      </Footer>
    </Container>
  );
};
