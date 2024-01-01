import {View, Dimensions, FlatList, ActivityIndicator} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useFetchYoutubePastor} from '../../../api/youtubePastorApi';

/*
short item size : 9: 16
*/
const screenWidth = Math.floor((Dimensions.get('window').width - 10 - 16) / 3);
const screenHeight = Math.floor(screenWidth * (16 / 9));

export default function ContentPastorShortList() {
  const {data, isLoading} = useFetchYoutubePastor({
    options: '',
    keyword: '',
    shorts: 'Y',
    page: 1,
  });
  if (isLoading) {
    return (
      <View style={{marginLeft: 8}}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => {
          return <PastorShortItem item={item} />;
        }}
        contentContainerStyle={{marginLeft: 8, marginTop: 10}}
        ItemSeparatorComponent={<View style={{width: 8}} />}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

function PastorShortItem({item}) {
  return (
    <View>
      <FastImage
        source={{
          uri: item.thumbnailHigh,
        }}
        resizeMode="cover"
        // style={{width: 320, height: 180, borderRadius: 4}}
        style={{width: screenWidth, height: screenHeight, borderRadius: 6}}
      />
    </View>
  );
}
