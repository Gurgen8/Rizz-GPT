import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  StackNavigationRoutes,
  StackRoutNavigationParams,
} from '@navigation/types';
import {
  FirstScreen,
  FifthScreen,
  FourthScreen,
  SecondScreen,
  ThirdScreen,
} from '@screens';

const Stack = createNativeStackNavigator<StackRoutNavigationParams>();

export const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'fade_from_bottom',
        animationDuration: 300,
        gestureEnabled: false,
        headerShown: false,
      }}>
      <Stack.Screen
        name={StackNavigationRoutes.FirstScreen}
        component={FirstScreen}
      />
      <Stack.Screen
        name={StackNavigationRoutes.SecondScreen}
        component={SecondScreen}
      />
      <Stack.Screen
        name={StackNavigationRoutes.ThirdScreen}
        component={ThirdScreen}
      />
      <Stack.Screen
        name={StackNavigationRoutes.FourthScreen}
        component={FourthScreen}
      />
      <Stack.Screen
        name={StackNavigationRoutes.FifthScreen}
        component={FifthScreen}
      />
    </Stack.Navigator>
  );
};
