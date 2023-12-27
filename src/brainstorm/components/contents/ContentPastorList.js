import {
  View,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useFetchYoutubePastor} from '../../../api/youtubePastorApi';

export default function ContentPastorList() {
  const {data, isLoading} = useFetchYoutubePastor({
    options: '',
    keyword: '',
    shorts: 'N',
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
          return <PastorLargeItem item={item} />;
        }}
        contentContainerStyle={{marginLeft: 8, marginTop: 10}}
        ItemSeparatorComponent={<View style={{width: 16}} />}
        showsHorizontalScrollIndicator={false}
      />
    );
  }
}

function PastorLargeItem({item}) {
  return (
    <View>
      <FastImage
        source={{
          uri: item.thumbnailHigh,
        }}
        // style={{width: 320, height: 180, borderRadius: 4}}
        style={{width: 214, height: 120, borderRadius: 6}}
      />
    </View>
  );
}
