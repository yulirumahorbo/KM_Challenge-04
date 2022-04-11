import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,  ActivityIndicator
} from 'react-native';
import React, {useEffect } from 'react';
import { moderateScale } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import {getBook, getBookDetail} from './redux/action';
import {setRefresh } from '../../reduxGlobal/action'

export default function Home() {
  const dispatch = useDispatch();
  const {bookData = []} = useSelector(state => state.home)
  const {loading, refresh} = useSelector(state => state.global)

  const getBooks = () => {
    dispatch(getBook())
  }

  const getBookDetails = item => {
    dispatch(getBookDetail(item.id))
  }

  useEffect(() => {
    getBooks();
  }, []);

  const listBook = ({ item }) => (
    <View style={{
      marginBottom: moderateScale(16),
      marginRight: moderateScale(16),
      height: moderateScale(200),
      width: moderateScale(100),
    }}
    >
    <TouchableOpacity onPress={()=>getBookDetails(item)}>
      <Image
        source={{ uri: `${item.cover_image}` }}
        style={{
          width: moderateScale(100),
          height: moderateScale(150),
          borderRadius: moderateScale(6),
          resizeMode: 'contain',
        }}
      />
        <Text style={[styles.regularSubText, {fontWeight: '600'}]} numberOfLines={1}>{item.title}</Text>
        <Text style={[styles.regularSubText, {fontSize: moderateScale(15),}]}>{item.author}</Text>
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
    dispatch(setRefresh(true))
    getBooks();
  }
  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: moderateScale(16)}}>
      <Text style={styles.regularSubText}>Good Morning, Veric!</Text>
      <View>
      <Text style={styles.regularText}>Recommended</Text>
        <FlatList
          style={{ marginTop: moderateScale(16) }}
          data={bookData}
          keyExtractor={(item, index) => index}
          renderItem={listBook}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View>
      <Text style={styles.regularText}>Popular Book</Text>
        <FlatList
          refreshing={refresh}
          onRefresh={() => onRefresh()}
          numColumns={3}
          style={{ marginTop: moderateScale(16)}}
          data={bookData}
          keyExtractor={(item, index) => index}
          renderItem={listBook}
          showsVerticalScrollIndicator={false}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  regularText:{
    fontWeight: '500',
    fontSize: moderateScale(18),
    color: '#000000',
  },
  regularSubText:{
    fontWeight: '400',
    fontSize: moderateScale(16),
    color: '#000000',
  },
});
