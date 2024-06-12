import React from 'react';
import {
  Container,
  ScreenshotContainer,
  Footer,
  ScrollView,
  CopyTextView,
  CopyButton,
  ShadowStyles,
} from './styles';
import {Button, Header} from '@components';
import {AppText, Colors} from '@uiKit';
import {CopyIcon} from '@assets/svgs';

export const ForthScreen = () => {
  return (
    <Container>
      <Header />
      <ScrollView>
        <ScreenshotContainer>
          <AppText
            variant="h2"
            color={Colors.BACKGROUND}
            text="User's screenshot"
          />
        </ScreenshotContainer>
        <AppText
          marginBottom={8}
          marginLeft={20}
          marginTop={8}
          variant="p1"
          text="Tap to copy rizz 👇"
        />
        <Footer>
          <CopyTextView style={ShadowStyles}>
            <CopyButton>
              <CopyIcon width={24} height={24} />
              <AppText fontSize={12} color={Colors.Dark_GRAY} text="Copy" />
            </CopyButton>
            <AppText
              variant="p1"
              color={Colors.BACKGROUND}
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
            est ut dui faucibus dapibus nec vel erat."
            />
          </CopyTextView>
          <Button isLeftText text="Generate more" />
        </Footer>
      </ScrollView>
    </Container>
  );
};
