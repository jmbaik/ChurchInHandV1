import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import {CihColor} from '../../bundles/Constants';
import {useNavigation} from '@react-navigation/native';

export default function Video({category, vid, thumbnail, title, statics}) {
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
