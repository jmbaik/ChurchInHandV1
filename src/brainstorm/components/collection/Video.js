import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {CihColor} from '../../bundles/Constants';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

export default function Video({category, item, statics}) {
  const {vid, title} = item;
  const {navigate} = useNavigation();
  const onPress = useCallback(() => {
    navigate(category, {item});
  }, [navigate, category, item]);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container} key={vid}>
        <View style={styles.photo}>
          {item.thumbnailMedium && (
            <FastImage
              style={styles.photo}
              source={{uri: item.thumbnailMedium}}
            />
          )}
        </View>
        <View style={styles.bottom}>
          <Text style={styles.nameText} numberOfLines={3}>
            {title}
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
    borderRadius: 12,
    overflow: 'hidden',
    width: 140,
  },
  photo: {
    width: 140,
    height: 79,
    backgroundColor: CihColor.third,
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
