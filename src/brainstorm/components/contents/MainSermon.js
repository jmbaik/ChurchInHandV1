import {
  View,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useCallback} from 'react';
import FastImage from 'react-native-fast-image';
import {useFetchMainSermon} from '../../../api/mainContentApi';
import Section from '../collection/Section';
import {useNavigation} from '@react-navigation/native';
import {CihColor} from '../../bundles/Constants';
import Divider from '../layout/Divider';

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
        <View
          style={{
            marginTop: 2,
            marginBottom: 12,
            marginHorizontal: 18,
            width: screenWidth * 2 - 20,
          }}>
          {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MainSermonItem item={data[0]} />
            <MainSermonItem item={data[1]} />
          </View>
          <View style={{height: 10}} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <MainSermonItem item={data[2]} />
            <MainSermonItem item={data[3]} />
          </View> */}
          {data.map(item => {
            return <MainPlainText item={item} key={item.vid} />;
          })}
        </View>
      </Section>
    );
  }
}

function MainPlainText({item}) {
  return (
    <TouchableOpacity>
      <View
        key={item.vid}
        style={{
          height: 30,
        }}>
        <Text style={{fontSize: 14, color: CihColor.black}}>{item.tag}</Text>
      </View>
      <View style={{height: 1, backgroundColor: CihColor.bottomButtonColor}} />
      <View style={{height: 8}} />
    </TouchableOpacity>
  );
}

function MainSermonItem({item}) {
  const {navigate} = useNavigation();
  const onPress = useCallback(() => {
    navigate('Sermon', {item});
  }, [navigate, item]);
  const statics = `좋아요 : ${item.likes} 싫어요 : ${item.hates}`;
  return (
    <TouchableOpacity onPress={onPress} style={{marginRight: 10}}>
      <View style={styles.container} key={item.vid}>
        <View style={styles.photo}>
          <FastImage
            source={{
              uri: item.thumbnailHigh,
            }}
            // style={{width: 320, height: 180, borderRadius: 4}}
            style={{width: screenWidth, height: screenHeight}}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.nameText} numberOfLines={3}>
            {item.title}
          </Text>
          <Text style={styles.descriptionText}>{statics}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: CihColor.secondary,
    borderRadius: 4,
    overflow: 'hidden',
    width: screenWidth,
  },
  photo: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: CihColor.third,
  },
  bottom: {
    padding: 12,
    height: 64,
  },
  nameText: {
    color: CihColor.black,
    fontSize: 10,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: CihColor.black,
    fontSize: 9,
  },
});
