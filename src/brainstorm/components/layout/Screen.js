import {View} from 'react-native';
import React from 'react';
import {CihColor} from '../../bundles/Constants';
import LogoHeader from '../header/LogoHeader';
import Bottom from '../bottom/Bottom';

export default function Screen({children}) {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#ECEFF1',
        backgroundColor: CihColor.third,
      }}>
      {/* <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <LogoHeader />
      {children}
      <Bottom />
    </View>
  );
}
