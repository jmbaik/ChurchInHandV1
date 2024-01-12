import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Screen from '../components/layout/Screen';
import PannelBack from '../components/contents/PannelBack';

export default function MyFavoriteScreen() {
  return (
    <Screen>
      <ScrollView>
        <PannelBack />
        <View>
          <Text>나의 찜</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
