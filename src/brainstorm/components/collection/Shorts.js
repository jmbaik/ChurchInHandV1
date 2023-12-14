import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {CihColor} from '../../bundles/Constants';
import {useNavigation} from '@react-navigation/native';

export default function Shorts({category, vid, thumbnail, title, statics}) {
  const {navigate} = useNavigation();
  const onPress = useCallback(() => {
    navigate(category, {vid});
  }, [navigate, category, vid]);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container} key={vid}>
        <View style={styles.photo}>
          {thumbnail && (
            <Image style={styles.photo} source={{uri: thumbnail}} />
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
