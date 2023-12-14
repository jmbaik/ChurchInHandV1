import {View, Text, ScrollView, Alert, Button} from 'react-native';
import React, {useCallback, useState} from 'react';
import {CihColor} from '../bundles/Constants';
import LogoHeader from '../components/header/LogoHeader';
import FaithList from '../pages/FaithList';
import ShortsList from '../components/contents/ShortsList';
import Bottom from '../components/bottom/Bottom';
import Screen from '../components/layout/Screen';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function FaithScreen({route}) {
  console.log(route.params.vid);
  const vid = route.params.vid;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      // Alert.alert('video has finished playing!');
    }
  }, []);

  // const togglePlaying = useCallback(() => {
  //   setPlaying(prev => !prev);
  // }, []);
  return (
    <Screen>
      <ScrollView>
        <View style={{marginBottom: 100}}>
          <YoutubePlayer
            height={300}
            play={playing}
            videoId={vid}
            onChangeState={onStateChange}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}
