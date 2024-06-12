import React from 'react';
import {Container, FeaturesList, HeaderView} from './styles';
import {GoBackIcon, MatchIcon} from '@assets/svgs';
import {Banner} from '@components';
import {AppText, Colors} from '@uiKit';
import {FlatList, TouchableOpacity} from 'react-native';

export const SecondScreen = () => {
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

  const renderItem = ({item}) => {
    return <AppText variant="p1" width={180} text={item.title} />;
  };
  return (
    <Container>
      <FlatList
        data={[{}]}
        contentContainerStyle={{padding: 20}}
        renderItem={() => (
          <>
            <TouchableOpacity>
              <GoBackIcon width={25} height={25} fill={Colors.ROSE} />
            </TouchableOpacity>
            <HeaderView>
              <MatchIcon width={320} height={290} />
            </HeaderView>
            <FeaturesList>
              <FlatList renderItem={renderItem} data={FeaturesData} />
            </FeaturesList>
            <Banner />
          </>
        )}
      />
    </Container>
  );
};
