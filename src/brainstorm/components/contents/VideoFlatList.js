import {View, Text, FlatList, StyleSheet} from 'react-native';
import React, {useCallback} from 'react';
import Section from '../collection/Section';
import Video from '../collection/Video';
import Shorts from '../collection/Shorts';

export default function VideoFlatList({title, category, data}) {
  const vData = data?.filter(d => d.shorts === 'N');
  const sData = data?.filter(d => d.shorts === 'Y');
  return (
    <Section title={title}>
      <FlatList
        horizontal
        data={vData}
        renderItem={({item}) => {
          return (
            <Video
              category={category}
              vid={item.vid}
              thumbnail={item.thumbnailMedium}
              title={item.title}
              statics={'좋아요: 86 평점 : 88'}
            />
          );
        }}
        contentContainerStyle={{marginLeft: 8}}
        ItemSeparatorComponent={<View style={{width: 16}} />}
        showsHorizontalScrollIndicator={false}
      />
      <View style={{height: 20}} />
      <FlatList
        horizontal
        data={sData}
        renderItem={({item}) => {
          return (
            <Shorts
              category={category}
              vid={item.vid}
              thumbnail={item.thumbnailHigh}
              title={item.title}
              statics={'좋아요: 86 평점 : 88'}
            />
          );
        }}
        contentContainerStyle={{marginLeft: 8}}
        ItemSeparatorComponent={<View style={{width: 16}} />}
        showsHorizontalScrollIndicator={false}
      />
    </Section>
  );
}
