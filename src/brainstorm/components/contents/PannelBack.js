import {View, TouchableOpacity, Text} from 'react-native';
import React, {useCallback} from 'react';
import {CihColor} from '../../bundles/Constants';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from '../../../components/icons/MaterialIcons';
import AntIcons from '../../../components/icons/AntIcons';

export default function PannelBack() {
  const navigate = useNavigation();
  const onPress = useCallback(() => {
    navigate.goBack();
  }, [navigate]);
  return (
    <View
      style={{
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 5,
        marginBottom: 10,
        // borderWidth: 1,
        // borderColor: 'red',
      }}>
      <View>
        <TouchableOpacity onPress={onPress}>
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={CihColor.bottomButtonColor}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
          }}>
          <AntIcons name="like2" size={18} color={CihColor.bottomButtonColor} />
          <Text style={{fontSize: 12}}>159</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 3,
          }}>
          <AntIcons
            name="dislike1"
            size={18}
            color={CihColor.bottomButtonColor}
          />
          <Text style={{fontSize: 12}}>59</Text>
        </View>
      </View>
    </View>
  );
}
