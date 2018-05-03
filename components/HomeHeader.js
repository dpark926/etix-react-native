import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

const HomeHeader = () => (
  <View style={styles.headerContainer}>
    <Image source={require('../styles/imgs/mta_logo.png')} />
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: '#223365',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});

export default HomeHeader;