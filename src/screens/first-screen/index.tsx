import React from 'react';
import {AppText, Colors, Fonts, SafeAreaView} from '@uiKit';
import {
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@navigation/types';
import {TouchableOpacity} from 'react-native';

export const FirstScreen = ({
  navigation,
}: StackNavigationScreenProps<StackNavigationRoutes.FirstScreen>) => {
  const onNextScreen = () =>
    navigation.navigate(StackNavigationRoutes.SecondScreen);

  return (
    <SafeAreaView isCenter>
      <TouchableOpacity onPress={onNextScreen}>
        <AppText
          fontFamily={Fonts.Syncopate}
          variant="h1"
          color={Colors.ROSE}
          text="RIZZGPT"
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
