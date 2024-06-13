import React, {FC, memo} from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppText, Colors, Flexible} from '@uiKit';
import {Button} from '@components';
import MaskedView from '@react-native-masked-view/masked-view';
import {BannerContainer, Container, styles} from './styles';
import {LocalProps} from './types';

export const Banner: FC<LocalProps> = memo(({onPress}) => {
  return (
    <Container>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={Colors.BANNER_BUTTON_GRADIENT}
        style={styles.miniButton}>
        <AppText variant="p1" text="Rizz God" />
      </LinearGradient>
      <BannerContainer>
        <MaskedView
          style={styles.maskedView}
          maskElement={
            <View style={styles.maskElement}>
              <AppText
                fontWeight="800"
                variant="h3"
                text="Elevenat your game"
              />
            </View>
          }>
          <LinearGradient
            colors={Colors.BANNER_TEXT_GRADIENT}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={Flexible}
          />
        </MaskedView>
        <Button onPress={onPress} text="Unlock Free Trial" />
        <AppText
          marginBottom={12}
          marginTop={21}
          color={Colors.LIGHT_GRAY}
          textAlign="center"
          text="risk-free trial then $8.67/week"
        />
      </BannerContainer>
    </Container>
  );
});
