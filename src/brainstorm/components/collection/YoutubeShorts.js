import {View, Dimensions} from 'react-native';
import React, {useCallback, useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function YoutubeShorts({vid}) {
  const width = 300;
  const height = Math.floor((width * 16) / 9);
  console.log('width', height);
  // 16: 9 사이즈
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      // Alert.alert('video has finished playing!');
    }
  }, []);
  return (
    <>
      <View
        style={{
          width: 315,
          height: 560,
          marginHorizontal: 10,
        }}>
        <YoutubePlayer
          width={315}
          height={560}
          play={playing}
          videoId={vid}
          onChangeState={onStateChange}
        />
      </View>
    </>
  );
}
