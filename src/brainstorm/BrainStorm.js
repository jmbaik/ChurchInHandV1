import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';
import React from 'react';
import BackgroundHeader from './components/header/BackgroundHeader';
import LogoHeader from './components/header/LogoHeader';
import CategoryHeader from './components/header/CategoryHeader';
import Bottom from './components/bottom/Bottom';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import VideoList from './components/contents/VideoList';
import ShortsList from './components/contents/ShortsList';
import {CihColor} from './bundles/Constants';
import VideoFlatList from './components/contents/VideoFlatList';
import FaithList from './pages/FaithList';
import Screen from './components/layout/Screen';

export default function BrainStorm() {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  return (
    <Screen>
      <ScrollView
      // style={{borderWidth: 1, borderColor: CihColor.dividerColor}}
      >
        <View style={{marginBottom: 100}}>
          {/* <VideoList title={'목사님 영상'} subTitle={'목사님 영상'} /> */}
          <FaithList />
          <ShortsList />
        </View>
      </ScrollView>
    </Screen>
  );
}
