import React from 'react';
import {HeaderRow, HeaderView} from './styles';
import {AppText, Colors} from '@uiKit';
import {PlusIcon, GoBackIcon} from '@assets/svgs';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackRoutNavigationParams} from '@navigation/types';
import {TouchableOpacity} from 'react-native';

export const Header = () => {
  const navigation = useNavigation<NavigationProp<StackRoutNavigationParams>>();

  const onGoBack = () => navigation.goBack();

  return (
    <HeaderView colors={['', '']}>
      <HeaderRow>
        <TouchableOpacity onPress={onGoBack}>
          <GoBackIcon width={25} height={25} fill={Colors.WHITE} />
        </TouchableOpacity>
        <AppText variant="h1" text="RIZZGPT" />
        <PlusIcon
          width={30}
          height={30}
          strokeWidth={3}
          stroke={Colors.WHITE}
        />
      </HeaderRow>
    </HeaderView>
  );
};
