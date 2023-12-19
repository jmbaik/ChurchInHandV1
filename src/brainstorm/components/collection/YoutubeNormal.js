import {View, Dimensions} from 'react-native';
import React, {useCallback, useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function YoutubeNormal({vid}) {
  const width = Dimensions.get('window').width - 20;
  const height = Math.floor((width * 9) / 16);
  console.log('width', height);
  // 16: 9 사이즈
  console.log(vid);
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
          marginHorizontal: 10,
        }}>
        <YoutubePlayer
          height={height}
          play={playing}
          videoId={vid}
          onChangeState={onStateChange}
        />
      </View>
    </>
  );
}
