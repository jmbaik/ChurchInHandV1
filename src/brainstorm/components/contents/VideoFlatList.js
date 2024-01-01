import {View, FlatList} from 'react-native';
import React from 'react';
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
        renderItem={({item, statics = '좋아요: 86 평점 : 88'}) => {
          return <Video item={item} category={category} statics={statics} />;
        }}
        contentContainerStyle={{marginLeft: 8, marginTop: 6}}
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
              item={item}
              category={category}
              statics={'좋아요: 86 평점 : 88'}
            />
          );
        }}
        contentContainerStyle={{marginLeft: 8, marginBottom: 10}}
        ItemSeparatorComponent={<View style={{width: 16}} />}
        showsHorizontalScrollIndicator={false}
      />
    </Section>
  );
}
