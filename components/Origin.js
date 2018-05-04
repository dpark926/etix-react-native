import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
// Actions
import handleClick from '../actions/clickActions';
// Reducer
import handleType from '../actions/typeActions';
// Components
import BlackBar from './BlackBar';
import SearchBar from './SearchBar';
// Data
import LOCATIONS from '../config/LOCATIONS';

class Origin extends Component<> {
  handleClickedOrigin = (event) => {
    this.props.handleClickedOrigin(event);
    this.props.navigation.navigate('Destination')
  }

  handleOrigin = (text) => {
    this.props.handleOrigin(text);
  }

  render() {
    let typedOrigin = this.props.typeReducer.origin
    let newArray = [];

    for (let i = 0; i < LOCATIONS.length; i++) {
      let stations = LOCATIONS[i].stations;

      for (let j = 0; j < stations.length; j++) {
        let location = stations[j]

        if (location.slice(0, typedOrigin.length).toLowerCase() === typedOrigin.toLowerCase() && !newArray.includes(location)) {
          newArray.push(location)
        }
      }
    }

    let locationList = newArray.map( station => {
      if (station === 'Grand Central Terminal' || station =='Penn Station') {
        return (
          <TouchableHighlight key={station.split(' ').join('-')} onPress={() => this.handleClickedOrigin(station)}>
            <View style={[styles.stationItem, styles.nycStation]}>
              <Text style={styles.stationText}>{station.toUpperCase()}</Text>
            </View>
          </TouchableHighlight>
        )
      } else if (station === '000') {
        return (
          <View key={station} style={[styles.stationItem, styles.blueDivider]}>
            <Text></Text>
          </View>
        )
      } else if (station.length === 1) {
        return (
          <View key={station} style={[styles.stationItem, styles.locationTitle]}>
            <Text style={styles.stationText}>{station}</Text>
          </View>
        )
      } else {
        return (
          <TouchableHighlight key={station.split(' ').join('-')} onPress={() => this.handleClickedOrigin(station)}>
            <View style={[styles.stationItem, styles.otherStation]}>
              <Text style={styles.stationText}>{station}</Text>
            </View>
          </TouchableHighlight>
        )
      }
    })

    const yellowWidth = 0.1;

    return (
      <ScrollView style={styles.origin}>
        <BlackBar yellowWidth={yellowWidth}/>
        <SearchBar handleLocation={this.handleOrigin}/>
        {locationList}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  stationItem: {
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 1,
    // borderColor: 'red',
    // borderWidth: 2
  },
  nycStation: {

  },
  blueDivider: {
    backgroundColor: '#223365',
    marginLeft: 0,
    marginRight: 0,
    borderBottomWidth: 0
  },
  locationTitle: {
    backgroundColor: '#d6d6d6',
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0
  },
  otherStation: {

  },
  stationText: {
    fontSize: 16
  }
});

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleClickedOrigin: handleClick.handleClickedOrigin,
  handleOrigin: handleType.handleTypedOrigin
}

export default connect( mapStateToProps, mapActionsToProps )( Origin );
