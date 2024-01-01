import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {useFetchPastor} from '../../api/commonCodeApi';
import Section from '../components/collection/Section';

export default function PastorCategory() {
  const {data} = useFetchPastor();
  const pastorData = data?.filter(v => v.pic?.length > 0);
  return (
    <Section title="말씀">
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginBottom: 10,
          marginHorizontal: 10,
          gap: 10,
        }}>
        {pastorData &&
          pastorData.map((v, idx) => {
            return (
              <View key={v.pastorCode}>
                <FastImage
                  style={{width: 50, height: 50, borderRadius: 30}}
                  source={{
                    uri: `https://cih.metelsoft.com/assets/pastor/${v.pastorCode}.png`,
                  }}
                />
              </View>
            );
          })}
      </ScrollView>
    </Section>
  );
}
