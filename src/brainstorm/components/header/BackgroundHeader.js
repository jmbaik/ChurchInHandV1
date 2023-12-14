import {View, Text, Image} from 'react-native';
import React from 'react';

export default function BackgroundHeader() {
  return (
    <View
      style={{
        position: 'absolute',
        height: 350,
        width: '100%',
      }}>
      <Image
        source={{uri: 'https://picsum.photos/300'}}
        style={{width: '100%', height: 350}}
      />
    </View>
  );
}
