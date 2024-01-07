import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Screen from '../components/layout/Screen';
import PannelBack from '../components/contents/PannelBack';
import YoutubeNormal from '../components/collection/YoutubeNormal';
import CategoryContent from '../components/contents/CategoryContent';
import YoutubeShorts from '../components/collection/YoutubeShorts';

export default function CcmScreen({route}) {
  const item = route.params.item;

  // const togglePlaying = useCallback(() => {
  //   setPlaying(prev => !prev);
  // }, []);
  return (
    <Screen>
      <ScrollView>
        <PannelBack />
        <YoutubeNormal vid={item.vid} />
        <CategoryContent item={item} />
      </ScrollView>
    </Screen>
  );
}
