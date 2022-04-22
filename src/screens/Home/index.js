import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { getBook, getBookDetail, getBookLimit } from './redux/action';
import { setRefresh } from '../../reduxGlobal/action';

const styles = StyleSheet.create({
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

export default function Home({ navigation }) {
  const dispatch = useDispatch();
  const { bookData, bookDataLimit } = useSelector((state) => state.home);
  const { loading, refresh } = useSelector((state) => state.global);

  const onPress = () => {
    navigation.navigate('Login');
  };
  const getBooks = () => {
    dispatch(getBook());
  };

  const getBookLimits = () => {
    dispatch(getBookLimit());
  };

  const getBookDetails = (item) => {
    dispatch(getBookDetail(item.id));
  };

  useEffect(() => {
    getBooks();
    getBookLimits();
  }, []);

  const listBook = ({ item }) => (
    <View
      style={{
        marginBottom: moderateScale(16),
        marginRight: moderateScale(12),
        height: moderateScale(200),
        width: moderateScale(100),
      }}
    >
      <TouchableOpacity onPress={() => getBookDetails(item)}>
        <Image
          source={{ uri: `${item.cover_image}` }}
          style={{
            width: moderateScale(100),
            height: moderateScale(150),
            borderRadius: moderateScale(6),
            resizeMode: 'contain',
          }}
        />
        <Text
          style={[styles.regularSubText, { fontWeight: '600' }]}
          numberOfLines={1}
        >
          {item.title}
        </Text>
        <Text
          style={[styles.regularSubText, { fontSize: moderateScale(15) }]}
          numberOfLines={1}
        >
          {item.author}
        </Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <View flex={1} justifyContent="center" alignItems="center">
        <ActivityIndicator size={moderateScale(50)} />
      </View>
    );
  }
  const onRefresh = () => {
    dispatch(setRefresh(true));
    getBooks();
  };
  return (
    <View
      style={{ flex: 1, backgroundColor: 'white', padding: moderateScale(16) }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.regularSubText}>Good Morning, Veric!</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.regularSubText, { color: '#3b3b11' }]}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.regularText}>Recommended</Text>
        <FlatList
          style={{ marginTop: moderateScale(16) }}
          data={bookDataLimit.sort(
            (data1, data2) => data2.average_rating - data1.average_rating,
          )}
          keyExtractor={(item, index) => index}
          renderItem={listBook}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.regularText}>Popular Book</Text>
        <FlatList
          refreshing={refresh}
          onRefresh={() => onRefresh()}
          numColumns={3}
          style={{ marginTop: moderateScale(16) }}
          data={bookData}
          keyExtractor={(item, index) => index}
          renderItem={listBook}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
