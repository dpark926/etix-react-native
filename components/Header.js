import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import cssVariables from '../styles/cssVariables';

function Header(props) {
  console.log(props)
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.backButton}>{'<'}</Text>
      <Text style={styles.headerTitle}>{props.title}</Text>
      <Text style={[styles.backButton, styles.empty]}></Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#223365',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  backButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1
  },
  headerTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 15,
    flex: 5,
    textAlign: 'center'
  },
});

export default Header;