import {View} from 'react-native';
import React from 'react';
import {CihColor} from '../../bundles/Constants';

export default function Divider({
  height = 1,
  color = CihColor.bottomButtonColor,
  width = '100%',
}) {
  return (
    <View style={{height: height, backgroundColor: color, width: width}} />
  );
}
