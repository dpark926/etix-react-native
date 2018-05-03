import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';
import cssVariables from '../styles/cssVariables';

const HomeHeader = () => (
  <View style={styles.headerContainer}>
    <Image source={require('../styles/imgs/mta_logo.png')} />
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: cssVariables.darkerBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
});

export default HomeHeader;