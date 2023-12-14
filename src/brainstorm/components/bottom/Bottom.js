import {View, Text, TouchableOpacity, Platform} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BOTTOM_HEIGHT, CihColor} from '../../bundles/Constants';

export default function Bottom() {
  const bottomStyle =
    Platform.OS === 'ios'
      ? {height: BOTTOM_HEIGHT + 10}
      : {height: BOTTOM_HEIGHT};
  return (
    <View style={{backgroundColor: CihColor.backgroundColor}}>
      <View style={bottomStyle}>
        <View style={{flexDirection: 'row'}}>
          <BottomItem title="홈" name="home-filled" />
          <BottomItem title="둘러보기" name="home-filled" />
          <BottomItem title="보관함" name="home-filled" />
        </View>
      </View>
    </View>
  );
}

function BottomItem({name, title}) {
  return (
    <TouchableOpacity style={{alignItems: 'center', flex: 1}}>
      <View style={{marginVertical: 6}}>
        <Icon name={name} color={CihColor.bottomButtonColor} size={28} />
      </View>
      {/* <Text style={{color: '#6F6F6B', fontSize: 12}}>{title}</Text> */}
    </TouchableOpacity>
  );
}
