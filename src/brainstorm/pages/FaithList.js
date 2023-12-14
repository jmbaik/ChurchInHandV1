import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';
import {useFetchYoutubeFaith} from '../../api/youtubeFaithApi';
import VideoFlatList from '../components/contents/VideoFlatList';

export default function FaithList() {
  const {isLoading, data} = useFetchYoutubeFaith(
    {
      options: 'time',
      keyword: '',
    },
    'r',
  );
  return (
    <>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <VideoFlatList category="Faith" title="삶과 신앙" data={data} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
