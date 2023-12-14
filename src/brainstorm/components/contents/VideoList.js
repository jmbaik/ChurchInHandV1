import {View, Text, Image, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import {faker} from '@faker-js/faker';
import Icon from 'react-native-vector-icons/Entypo';

const {width} = Dimensions.get('window');
export default function VideoList({title, subTitle}) {
  return (
    <View>
      <Title title={title} subTitle={subTitle} />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 10}}>
        {[...Array(3)].map((val, idx) => {
          return (
            <View style={{width: width * 0.92}} key={idx}>
              {[...Array(4)].map((value, index) => {
                return <SmallItem key={index} />;
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

function SmallItem() {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
      }}>
      <View style={{flexDirection: 'row', flex: 1, flexShrink: 0}}>
        <Image
          source={{
            uri: `https://picsum.photos/5${Math.floor(Math.random() * 100)}`,
          }}
          style={{width: 50, height: 50, borderRadius: 2}}
        />
        <View style={{marginLeft: 14, justifyContent: 'center', flex: 1}}>
          <Text style={{color: 'black', fontSize: 12, marginBottom: 4}}>
            {faker.music.genre()}
          </Text>
          <Text style={{color: 'black'}} numberOfLines={1}>
            {faker.music.songName()}
          </Text>
        </View>
      </View>
      <View style={{padding: 10, flexShrink: 1}}>
        <Icon name="dots-three-vertical" color="black" size={12} />
      </View>
    </View>
  );
}

function Title({title, subTitle}) {
  return (
    <View style={{paddingHorizontal: 10, paddingTop: 20, paddingBottom: 10}}>
      <Text style={{fontSize: 13, color: 'black', fontWeight: '200'}}>
        {title}
      </Text>
      <Text style={{fontWeight: 'bold', fontSize: 28, color: 'black'}}>
        {subTitle}
      </Text>
    </View>
  );
}
