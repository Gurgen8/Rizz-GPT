import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AppText, Colors} from '@uiKit';
import {Button} from '@components';
import MaskedView from '@react-native-masked-view/masked-view';
import {BannerContainer, Container, styles} from './styles';

export const Banner = () => {
  return (
    <Container>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#4caf50', '#46B1C9']}
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
            colors={['#fff', '#46B1C9']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={{flex: 1}}
          />
        </MaskedView>
        <Button text="Unlock Free Trial" />
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
};
