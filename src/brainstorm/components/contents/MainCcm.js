import {View, FlatList} from 'react-native';
import React from 'react';
import Section from '../collection/Section';
import Shorts from '../collection/Shorts';
import {useFetchMainCcm} from '../../../api/mainContentApi';

export default function MainCcm() {
  const category = 'Ccm';
  const {data: sData} = useFetchMainCcm();
  return (
    <Section title="찬양">
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
