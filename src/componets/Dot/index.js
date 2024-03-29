import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

export default function Dot(props) {
  return (
    <View style={[styles.container, { backgroundColor: props.color }]}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.090,
    height: Dimensions.get('window').width * 0.090,
    borderRadius: Dimensions.get('window').width * 0.050 / 1,
    marginHorizontal: '2.5%',
    elevation: 5,

  }
});



