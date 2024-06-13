import React from 'react';
import {FeaturesList, HeaderView, ListContent, Pressable} from './styles';
import {GoBackIcon, MatchIcon} from '@assets/svgs';
import {Banner} from '@components';
import {AppText, Colors, SafeAreaView} from '@uiKit';
import {FlatList} from 'react-native';
import {
  StackNavigationRoutes,
  StackNavigationScreenProps,
} from '@navigation/types';

export const SecondScreen = ({
  navigation,
}: StackNavigationScreenProps<StackNavigationRoutes.SecondScreen>) => {
  const FeaturesData = [
    {
      title: 'Unlimited Rizz',
      id: 1,
    },
    {
      title: 'Coach Recommended',
      id: 2,
    },
    {
      title: 'Proven to Get Date',
      id: 3,
    },
    {
      title: 'x10 More Responses',
      id: 4,
    },
    {
      title: 'x8 More Dates',
      id: 5,
    },
  ];

  const onNextScreen = () =>
    navigation.navigate(StackNavigationRoutes.ThirdScreen);

  const onGoBack = () => navigation.goBack();

  const renderItem = ({item}) => {
    return <AppText variant="p1" width={180} text={item.title} />;
  };
  return (
    <SafeAreaView>
      <FlatList
        data={[{}]}
        contentContainerStyle={ListContent}
        renderItem={() => (
          <>
            <Pressable onPress={onGoBack}>
              <GoBackIcon width={25} height={25} fill={Colors.ROSE} />
            </Pressable>
            <HeaderView>
              <MatchIcon width={320} height={290} />
            </HeaderView>
            <FeaturesList>
              <FlatList renderItem={renderItem} data={FeaturesData} />
            </FeaturesList>
            <Banner onPress={onNextScreen} />
          </>
        )}
      />
    </SafeAreaView>
  );
};
