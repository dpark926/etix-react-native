import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native';
import cssVariables from '../styles/cssVariables';

const SearchBar = (props) => {
  // console.log(props)
  return (
    <View style={styles.searchContainer}>
      <View>
        <View style={styles.searchIcon}></View>
        {/* <input className="location-search-box" type='text' onChange={ props.handleLocation } placeholder="Search"></input> */}
        <TextInput
          placeholder='Search'
          placeholderTextColor='white'
          style={styles.search}
          // onChangeText={(text) => console.log(text)}
          // onChangeText={props.handleLocation}
          onChangeText={(text) => props.handleLocation(text)}
        />
        {/* <Text>Search Bar</Text> */}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: cssVariables.darkerBlue,
  },
  searchIcon: {

  },
  search: {
    height: 37,
    margin: 10,
    padding: 10,
    backgroundColor: cssVariables.darkBlue,
    color: 'white',
    borderRadius: 10,
  }
})

export default SearchBar;
