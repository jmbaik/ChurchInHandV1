import {View, TouchableOpacity} from 'react-native';
import React, {useCallback} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {CihColor} from '../../bundles/Constants';
import {useNavigation} from '@react-navigation/native';

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
      <TouchableOpacity onPress={onPress}>
        <Icon
          name="arrow-back-ios"
          size={20}
          color={CihColor.bottomButtonColor}
        />
      </TouchableOpacity>
    </View>
  );
}
