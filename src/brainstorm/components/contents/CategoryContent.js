import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CihColor, CihSize} from '../../bundles/Constants';
import Divider from '../layout/Divider';
import AntIcons from '../../../components/icons/AntIcons';
import MaterialIcons from '../../../components/icons/MaterialIcons';
import FontAwesomeIcons from '../../../components/icons/FontAwesomeIcons';
import MaterialCommunityIcons from '../../../components/icons/MaterialCommunityIcons';

export default function CategoryContent() {
  return (
    <View
      style={{
        marginHorizontal: 10,
      }}>
      <View
        style={{
          marginTop: 8,
          padding: 4,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: CihColor.black,
            fontWeight: 'bold',
            marginBottom: 4,
            fontSize: 18,
            // borderWidth: 1,
            // borderColor: 'red',
          }}>
          혼나러 왔다가 감동받고 갑니다.{' '}
        </Text>
      </View>
      <ContentButtonArea />
      <CommentArea />
    </View>
  );
}

function ContentButtonArea() {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 4,
        justifyContent: 'space-between',
      }}>
      <View style={styles.buttonView}>
        <MaterialIcons
          name="list-alt"
          size={CihSize.contentIconSize}
          color={CihColor.fontColor}
        />
        <Text style={styles.buttonText}>말씀목록추가</Text>
      </View>
      <View style={styles.buttonView}>
        <MaterialIcons
          name="favorite-border"
          size={24}
          color={CihColor.fontColor}
        />
        <Text style={styles.buttonText}>찜하기</Text>
      </View>
      <View style={styles.buttonView}>
        <AntIcons
          name="like2"
          size={CihSize.contentIconSize}
          color={CihColor.fontColor}
        />
      </View>
      <View style={styles.buttonView}>
        <AntIcons
          name="dislike1"
          size={CihSize.contentIconSize}
          color={CihColor.fontColor}
        />
      </View>
      <View style={styles.buttonView}>
        <MaterialCommunityIcons
          name="pencil-plus-outline"
          size={CihSize.contentIconSize}
          color={CihColor.fontColor}
        />
        <Text style={styles.buttonText}>댓글</Text>
      </View>
    </View>
  );
}

function CommentArea() {
  return (
    <View
      style={{
        backgroundColor: CihColor.secondary,
        borderRadius: 5,
        paddingVertical: 10,
        margin: 10,
      }}>
      <View style={{marginHorizontal: 10}}>
        <View style={{flexShrink: 1}}>
          <Text
            style={{
              fontSize: 12,
              color: CihColor.iconColor,
            }}>
            우선 순위를 생각하라 우리 모두 다 알고 있는 애기지만, 이렇게 강의로
            들으니 훨씬 와 닿네요
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 6,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'center',
              gap: 6,
            }}>
            <Text style={{fontSize: 12, color: '#00000060'}}>초맨100</Text>
            <Text style={{fontSize: 11, color: '#00000050'}}>2022.02.22</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 6,
            }}>
            <AntIcons
              size={CihSize.likesIconSize}
              name="like2"
              color={CihColor.third}
            />
            <Text style={{fontSize: 12, color: '#00000050'}}>111</Text>
            <AntIcons
              size={CihSize.likesIconSize}
              name="dislike1"
              color={CihColor.third}
            />
            <Text style={{fontSize: 12, color: '#00000050'}}>102</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: 'row',
    padding: 5,
    borderWidth: 0.5,
    backgroundColor: '#00000010',
    borderColor: '#00000030',
    marginHorizontal: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: CihColor.fontColor,
    fontSize: 10,
  },
});
