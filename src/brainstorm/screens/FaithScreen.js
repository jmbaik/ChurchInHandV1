import {View, Text, ScrollView, Alert, Button} from 'react-native';
import React, {useCallback, useState} from 'react';
import {CihColor} from '../bundles/Constants';
import LogoHeader from '../components/header/LogoHeader';
import FaithList from '../pages/FaithList';
import ShortsList from '../components/contents/ShortsList';
import Bottom from '../components/bottom/Bottom';
import Screen from '../components/layout/Screen';
import YoutubePlayer from 'react-native-youtube-iframe';
import CategoryContent from '../components/contents/CategoryContent';
import YoutubeNormal from '../components/collection/YoutubeNormal';
import PannelBack from '../components/contents/PannelBack';

export default function FaithScreen({route}) {
  console.log(route.params.vid);
  const vid = route.params.vid;

  // const togglePlaying = useCallback(() => {
  //   setPlaying(prev => !prev);
  // }, []);
  return (
    <Screen>
      <ScrollView>
        <PannelBack />
        <YoutubeNormal vid={vid} />
        <CategoryContent />
      </ScrollView>
    </Screen>
  );
}
