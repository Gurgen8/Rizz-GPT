import React, {memo} from 'react';
import {HeaderView, HeaderText} from './styles';

export const Header = memo(() => {
  return (
    <HeaderView>
      <HeaderText>RIZZ GPT</HeaderText>
    </HeaderView>
  );
});
