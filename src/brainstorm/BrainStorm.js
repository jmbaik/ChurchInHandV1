import {ScrollView, View} from 'react-native';
import React from 'react';
import FaithList from './pages/FaithList';
import Screen from './components/layout/Screen';
import PastorCategory from './pages/PastorCategory';
import MainPastor from './components/contents/MainPastor';
import MainCeleb from './components/contents/MainCeleb';
import MainSermon from './components/contents/MainSermon';
import MainCcm from './components/contents/MainCcm';

export default function BrainStorm() {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        // style={{borderWidth: 1, borderColor: CihColor.dividerColor}}
      >
        <View style={{marginBottom: 100}}>
          {/* <VideoList title={'목사님 영상'} subTitle={'목사님 영상'} /> */}
          <PastorCategory />
          <MainPastor />
          <FaithList />
          <MainCeleb />
          <MainCcm />
          <MainSermon />
        </View>
      </ScrollView>
    </Screen>
  );
}
