import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CihColor} from '../../bundles/Constants';

export default function Section({title, children}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitleText}>{title}</Text>
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
