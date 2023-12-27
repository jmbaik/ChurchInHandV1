import {ScrollView, View} from 'react-native';
import React from 'react';
import ShortsList from './components/contents/ShortsList';
import FaithList from './pages/FaithList';
import Screen from './components/layout/Screen';
import PastorCategory from './pages/PastorCategory';
import ContentPastorList from './components/contents/ContentPastorList';

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
          <PastorCategory />
          <ContentPastorList />
          <FaithList />
        </View>
      </ScrollView>
    </Screen>
  );
}
