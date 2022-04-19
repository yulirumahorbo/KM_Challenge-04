import {
  View, Text, StyleSheet, Image,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { moderateScale } from 'react-native-size-matters';
import { useSelector } from 'react-redux';
import iconBack from '../../assets/image/icon-back.png';
import iconLike from '../../assets/image/love.png';
import iconShare from '../../assets/image/share.png';
import star from '../../assets/image/star.png';
// import PushNotification from "react-native-push-notification";
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ccaf9b' },
  list: {
    backgroundColor: '#fcfafa',
    marginTop: moderateScale(30),
    marginHorizontal: moderateScale(16),
    height: moderateScale(198),
    padding: moderateScale(8),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(8),
  },
  bottonBack: {
    top: moderateScale(16),
    left: moderateScale(16),
  },
  regularText: {
    fontWeight: '500',
    fontSize: moderateScale(18),
    color: '#000000',
  },
  regularSubText: {
    fontWeight: '400',
    fontSize: moderateScale(16),
    color: '#000000',
  },
});

export default function BookDetail({ navigation }) {
  const { bookDataDetail } = useSelector((state) => state.home);

  // const handleNotification = (bookDataDetail) => {
  //   PushNotification.localNotification({
  //     channelId: "test-channel",
  //     title: "Kamu menyukai" + bookDataDetail.title,
  //     message: bookDataDetail.author,
  //   })
  // }

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          margin: moderateScale(16),
          justifyContent: 'space-between',
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={iconBack}
            style={{ height: moderateScale(35), width: moderateScale(35) }}
          />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <Image
              source={iconLike}
              style={{
                height: moderateScale(35),
                width: moderateScale(35),
                marginRight: moderateScale(10),
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={iconShare}
              style={{ height: moderateScale(30), width: moderateScale(30) }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.list}>
        <ScrollView />
        <View
          style={{
            flexDirection: 'row',
            padding: moderateScale(16),
          }}
        >
          <Image
            source={{ uri: `${bookDataDetail.cover_image}` }}
            style={{
              width: moderateScale(100),
              height: moderateScale(150),
              resizeMode: 'contain',
              borderRadius: moderateScale(6),
              marginRight: moderateScale(16),
            }}
          />
          <View style={{ width: moderateScale(192) }}>
            <Text
              style={[styles.regularText, { color: '#3b3b11' }]}
              numberOfLines={2}
            >
              {bookDataDetail.title}
            </Text>
            <Text style={styles.regularSubText}>{bookDataDetail.author}</Text>
            <Text style={styles.regularSubText}>
              {bookDataDetail.publisher}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.list,
          {
            height: moderateScale(80),
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        <View style={{ flexDirection: 'row' }}>
          <View style={{ marginRight: moderateScale(16) }}>
            <Text style={styles.regularSubText}>Rating</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={[
                  styles.regularSubText,
                  { marginRight: moderateScale(3) },
                ]}
              >
                {bookDataDetail.average_rating}
              </Text>
              <Image
                source={star}
                style={{ height: moderateScale(14), width: moderateScale(14) }}
              />
            </View>
          </View>
          <View style={{ marginRight: moderateScale(50) }}>
            <Text style={styles.regularSubText}>Total Sale</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={[
                  styles.regularSubText,
                  { marginRight: moderateScale(3) },
                ]}
              >
                {bookDataDetail.total_sale}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#873c1e',
              width: moderateScale(130),
              borderWidth: moderateScale(2),
              borderRadius: moderateScale(6),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingLeft: moderateScale(10),
              paddingVertical: moderateScale(5),
            }}
          >
            <Text
              style={[
                styles.regularSubText,
                { marginRight: moderateScale(3), color: '#FFFFFF' },
              ]}
            >
              Buy
            </Text>
            <Text style={[styles.regularSubText, { color: '#FFFFFF' }]}>
              Rp.
              {' '}
              {bookDataDetail.price}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text
        style={[
          styles.regularText,
          { marginLeft: moderateScale(16), marginTop: moderateScale(16) },
        ]}
      >
        Overview
      </Text>
      <ScrollView
        style={[styles.list, { flex: 1, marginTop: moderateScale(16) }]}
      >
        <Text style={styles.regularSubText}>{bookDataDetail.synopsis}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
