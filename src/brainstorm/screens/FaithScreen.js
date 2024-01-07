import {ScrollView} from 'react-native';
import React from 'react';
import Screen from '../components/layout/Screen';
import CategoryContent from '../components/contents/CategoryContent';
import YoutubeNormal from '../components/collection/YoutubeNormal';
import PannelBack from '../components/contents/PannelBack';

export default function FaithScreen({route}) {
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
