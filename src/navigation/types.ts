import {NavigationProp} from '@react-navigation/native';
import {NativeStackScreenProps} from 'react-native-screens/lib/typescript/native-stack/types';

type StackRoutNavigationParams = {
  [StackNavigationRoutes.FirstScreen]: undefined;
  [StackNavigationRoutes.SecondScreen]: undefined;
  [StackNavigationRoutes.ThirdScreen]: undefined;
  [StackNavigationRoutes.FourthScreen]: undefined;
  [StackNavigationRoutes.FifthScreen]: undefined;
};

enum StackNavigationRoutes {
  FirstScreen = 'FirstScreen',
  SecondScreen = 'SecondScreen',
  ThirdScreen = 'ThirdScreen',
  FourthScreen = 'FourthScreen',
  FifthScreen = 'FifthScreen',
}

type StackNavigationScreenProps<T extends keyof StackRoutNavigationParams> =
  NativeStackScreenProps<StackRoutNavigationParams, T>;

type StackNavigationHookProp = NavigationProp<StackRoutNavigationParams>;

export {
  StackNavigationScreenProps,
  StackRoutNavigationParams,
  StackNavigationRoutes,
  StackNavigationHookProp,
};
