import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {CihColor} from '../../bundles/Constants';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export default function Shorts({category, item, statics}) {
  const {vid, thumbnailHigh} = item;
  const {navigate} = useNavigation();
  const onPress = useCallback(() => {
    navigate(category, {item});
  }, [navigate, category, item]);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container} key={vid}>
        <View style={styles.photo}>
          {thumbnailHigh && (
            <FastImage style={styles.photo} source={{uri: thumbnailHigh}} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: CihColor.primary,
    borderRadius: 6,
    overflow: 'hidden',
    width: 89,
  },
  photo: {
    width: 89,
    height: 160,
    backgroundColor: CihColor.third,
    resizeMode: 'cover',
  },
  bottom: {
    padding: 12,
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
