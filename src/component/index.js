import { View, StyleSheet, ActivityIndicator} from 'react-native'
import React from 'react'
import { moderateScale } from 'react-native-size-matters'

export default function Loading() {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size={moderateScale(60)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
})