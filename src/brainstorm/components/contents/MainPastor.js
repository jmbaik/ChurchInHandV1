import {View, Dimensions, ActivityIndicator} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useFetchMainPastor} from '../../../api/mainContentApi';
import Divider from '../layout/Divider';

const screenWidth = Math.floor((Dimensions.get('window').width - 16 - 16) / 2);
const screenHeight = Math.floor(screenWidth * (190 / 320) - 6);

export default function MainPastor() {
  const {data, isLoading} = useFetchMainPastor();
  if (isLoading) {
    return (
      <View style={{marginLeft: 8}}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <View style={{marginTop: 8, marginBottom: 12, marginHorizontal: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <MainPastorItem item={data && data[0]} />
          <MainPastorItem item={data && data[1]} />
        </View>
        <View style={{height: 10}} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <MainPastorItem item={data && data[2]} />
          <MainPastorItem item={data && data[3]} />
        </View>
      </View>
    );
  }
}

function MainPastorItem({item}) {
  return (
    <View>
      <FastImage
        source={{
          uri: item.thumbnailHigh,
        }}
        // style={{width: 320, height: 180, borderRadius: 4}}
        style={{width: screenWidth, height: screenHeight, borderRadius: 4}}
      />
    </View>
  );
}
