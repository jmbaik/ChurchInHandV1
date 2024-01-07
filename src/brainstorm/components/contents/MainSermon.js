import {
  View,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback} from 'react';
import FastImage from 'react-native-fast-image';
import {useFetchMainSermon} from '../../../api/mainContentApi';
import Section from '../collection/Section';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Math.floor((Dimensions.get('window').width - 16 - 16) / 2);
const screenHeight = Math.floor(screenWidth * (190 / 320) - 6);

export default function MainSermon() {
  const {data, isLoading} = useFetchMainSermon();
  if (isLoading) {
    return (
      <View style={{marginLeft: 8}}>
        <ActivityIndicator />
      </View>
    );
  } else {
    return (
      <Section title="강해 설교">
        <View style={{marginTop: 8, marginBottom: 12, marginHorizontal: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MainSermonItem item={data[0]} />
            <MainSermonItem item={data[1]} />
          </View>
          <View style={{height: 10}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MainSermonItem item={data[2]} />
            <MainSermonItem item={data[3]} />
          </View>
        </View>
      </Section>
    );
  }
}

function MainSermonItem({item}) {
  const {navigate} = useNavigation();
  const onPress = useCallback(() => {
    navigate('Sermon', {item});
  }, [navigate, item]);
  return (
    <TouchableOpacity onPress={onPress} style={{marginRight: 10}}>
      <FastImage
        source={{
          uri: item.thumbnailHigh,
        }}
        // style={{width: 320, height: 180, borderRadius: 4}}
        style={{width: screenWidth, height: screenHeight, borderRadius: 4}}
      />
    </TouchableOpacity>
  );
}
