import {View, Text, TouchableOpacity, Platform} from 'react-native';
import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {BOTTOM_HEIGHT, CihColor} from '../../bundles/Constants';
import MaterialIcons from '../../../components/icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function Bottom() {
  const {navigate} = useNavigation();
  const onPress = useCallback(
    category => {
      navigate(category);
    },
    [navigate],
  );

  const bottomStyle =
    Platform.OS === 'ios'
      ? {height: BOTTOM_HEIGHT + 10}
      : {height: BOTTOM_HEIGHT};
  return (
    <View style={{backgroundColor: CihColor.backgroundColor}}>
      <View style={bottomStyle}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{alignItems: 'center', flex: 1}}
            onPress={() => {
              onPress('Main');
            }}>
            <View style={{marginVertical: 6}}>
              <MaterialIcons
                name="home-filled"
                color={CihColor.bottomButtonColor}
                size={28}
              />
            </View>
            {/* <Text style={{color: '#6F6F6B', fontSize: 12}}>{title}</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', flex: 1}}
            onPress={() => {
              onPress('MyWord');
            }}>
            <View style={{marginVertical: 6}}>
              <MaterialIcons
                name="list-alt"
                color={CihColor.bottomButtonColor}
                size={28}
              />
            </View>
            {/* <Text style={{color: '#6F6F6B', fontSize: 10}}>말씀목록</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', flex: 1}}
            onPress={() => {
              onPress('MyFavorites');
            }}>
            <View style={{marginVertical: 6}}>
              <MaterialIcons
                name="favorite-border"
                color={CihColor.bottomButtonColor}
                size={28}
              />
            </View>
            {/* <Text style={{color: '#6F6F6B', fontSize: 10}}>말씀목록</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{alignItems: 'center', flex: 1}}
            onPress={() => {
              onPress('MyRecommend');
            }}>
            <View style={{marginVertical: 6}}>
              <MaterialIcons
                name="upload"
                color={CihColor.bottomButtonColor}
                size={28}
              />
            </View>
            {/* <Text style={{color: '#6F6F6B', fontSize: 10}}>말씀목록</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
