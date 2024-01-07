import {View, ActivityIndicator, Dimensions, FlatList} from 'react-native';
import React from 'react';
import {useFetchMainCeleb} from '../../../api/mainContentApi';
import Section from '../collection/Section';
import Video2 from '../collection/Video2';
import Video from '../collection/Video';

const screenWidth = Math.floor((Dimensions.get('window').width - 16 - 16) / 2);
const screenHeight = Math.floor(screenWidth * (190 / 320) - 6);

export default function MainCeleb() {
  const {data, isLoading} = useFetchMainCeleb();
  if (isLoading) {
    return (
      <View style={{marginLeft: 8}}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <Section title="간증">
        <View style={{height: screenHeight + 80, marginLeft: 10}}>
          <FlatList
            horizontal
            data={data}
            renderItem={({item, statics = '좋아요: 86 평점 : 88'}) => {
              return <Video item={item} category="Celeb" statics={statics} />;
            }}
            contentContainerStyle={{
              marginTop: 6,
            }}
            ItemSeparatorComponent={<View style={{width: 12}} />}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Section>
    );
  }
}
