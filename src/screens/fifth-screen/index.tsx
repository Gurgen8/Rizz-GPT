import React from 'react';
import {FlatList} from 'react-native';
import {Button, Header, ScreenshotItem} from '../../components';
import {ButtonView, Wrapper} from './styles';
import {
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@navigation/types';
import {Container} from '@uiKit';
const screenshots = new Array(9).fill("User's screenshot");

export const FifthScreen =
  ({}: StackNavigationScreenProps<StackNavigationRoutes.FifthScreen>) => {
    return (
      <Container>
        <Header />
        <Wrapper>
          <FlatList
            numColumns={3}
            data={screenshots}
            renderItem={ScreenshotItem}
            keyExtractor={(_item, index) => index.toString()}
          />
        </Wrapper>
        <ButtonView>
          <Button text="Upload Screenshot" />
        </ButtonView>
      </Container>
    );
  };
