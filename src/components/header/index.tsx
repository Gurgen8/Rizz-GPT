import React, {memo} from 'react';
import {HeaderRow, HeaderView} from './styles';
import {AppText, Colors} from '@uiKit';
import {PlusIcon, GoBackIcon} from '@assets/svgs';

export const Header = memo(() => {
  return (
    <HeaderView>
      <HeaderRow>
        <GoBackIcon width={25} height={25} fill={Colors.WHITE} />
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
});
