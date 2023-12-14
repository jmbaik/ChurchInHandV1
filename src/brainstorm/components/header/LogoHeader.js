import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Logo from '../../../assets/Cih-logo-02.svg';

export default function LogoHeader() {
  return (
    <SafeAreaView>
      <View
        style={{
          marginLeft: 14,
          marginRight: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          ...(Platform.OS === 'android' ? {marginTop: 10} : {}),
        }}>
        <Logo width={130} height={35} />
        {/* <CihLogo /> */}
        {/* <Image
          source={require('../../../assets/cih-logo.png')}
          style={{width: 120, height: 35}}
        /> */}
        <View style={{flexDirection: 'row'}}>
          <IconItem name="cached" />
          <IconItem name="search" />
          <IconItem name="density-medium" />
        </View>
      </View>
    </SafeAreaView>
  );
}

function IconItem({name}) {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 45,
          width: 38,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={name} size={20} color="black" />
      </View>
    </TouchableOpacity>
  );
}
