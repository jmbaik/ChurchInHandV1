import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {CihColor} from '../../bundles/Constants';
import MaterialCommunityIcons from '../../../components/icons/MaterialCommunityIcons';
import MaterialIcons from '../../../components/icons/MaterialIcons';

export default function Section({title, children}) {
  const width = Dimensions.get('window').width;
  return (
    <View style={styles.section}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: width - 20,
          backgroundColor: CihColor.secondary,
          marginVertical: 10,
          // borderWidth: 1,
          // borderColor: CihColor.iconColor,
          borderRadius: 5,
          marginHorizontal: 10,
          borderWidth: 1,
          borderColor: '#00000010',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <MaterialCommunityIcons
            name="cross"
            color={CihColor.white}
            size={20}
          />
          <Text style={styles.sectionTitleText}>{title}</Text>
        </View>
        <View style={{marginRight: 2}}>
          <MaterialIcons
            name="arrow-forward-ios"
            size={20}
            color={CihColor.bottomButtonColor}
          />
        </View>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    alignItems: 'flex-start',
  },
  sectionTitleText: {
    fontSize: 16,
    color: CihColor.black,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 10,
  },
});
