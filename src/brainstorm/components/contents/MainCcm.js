import {View, Text, FlatList} from 'react-native';
import React from 'react';
import Section from '../collection/Section';
import Shorts from '../collection/Shorts';
import {useFetchMainCcm} from '../../../api/mainContentApi';
import Shorts2 from '../collection/Shorts2';

export default function MainCcm() {
  const category = 'Ccm';
  const {data: sData} = useFetchMainCcm();
  return (
    <Section title="나의 성장">
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
        contentContainerStyle={{marginLeft: 10, marginBottom: 10}}
        ItemSeparatorComponent={<View style={{width: 18}} />}
        showsHorizontalScrollIndicator={false}
      />
    </Section>
  );
}
