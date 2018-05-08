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
// Reducers
import handleType from '../actions/typeActions';
// Components
import BlackBar from './BlackBar';
import SearchBar from './SearchBar';
// cssVariables
import cssVariables from '../styles/cssVariables';
// Data
import LOCATIONS from '../config/LOCATIONS';

class Destination extends Component<> {
  handleDestination = (text) => {
    this.props.handleClickedDestination(text);
    this.props.navigation.navigate('TicketType');
  }

  render() {
    let typedOrigin = this.props.typeReducer.destination
    let newArray = [];

    for (let i = 0; i < LOCATIONS.length; i++) {
      let stations = LOCATIONS[i].stations;

      for (let j = 0; j < stations.length; j++) {
        let location = stations[j]

        if (this.props.clickReducer.clickedOrigin === 'Grand Central Terminal' && location === 'Grand Central Terminal') {
          continue;
        } else if (this.props.clickReducer.clickedOrigin === 'Grand Central Terminal' && location === 'Penn Station') {
          continue;
        } else if (this.props.clickReducer.clickedOrigin === 'Penn Station' && location === 'Penn Station') {
          continue;
        } else if (this.props.clickReducer.clickedOrigin === 'Penn Station' && location === 'Grand Central Terminal') {
          continue;
        } else if (this.props.clickReducer.clickedOrigin === 'Grand Central Terminal' && location === '000') {
          continue;
        } else if (this.props.clickReducer.clickedOrigin === 'Penn Station' && location === '000') {
          continue;
        } else if (this.props.clickReducer.clickedOrigin === location) {
          continue;
        } else if (location.slice(0, typedOrigin.length).toLowerCase() === typedOrigin.toLowerCase() && !newArray.includes(location)) {
          newArray.push(location)
        }
      }
    }

    let locationList = newArray.map( station => {
      if (station === 'Grand Central Terminal' || station =='Penn Station') {
        return (
          <TouchableHighlight key={station.split(' ').join('-')} onPress={() => this.handleDestination(station)}>
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
          <TouchableHighlight key={station.split(' ').join('-')} onPress={() => this.handleDestination(station)}>
            <View style={[styles.stationItem, styles.otherStation]}>
              <Text style={styles.stationText}>{station}</Text>
            </View>
          </TouchableHighlight>
        )
      }
    })

    const yellowWidth = 0.2;

    return (
      <ScrollView style={styles.origin}>
        <BlackBar yellowWidth={yellowWidth}/>
        <View style={styles.originTo}>
          <Text style={styles.clicked}>{this.props.clickReducer.clickedOrigin}</Text>
        </View>
        <SearchBar handleLocation={this.handleDestination}/>
        {locationList}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  stationItem: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 13,
    paddingBottom: 12,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 1,
    backgroundColor: 'white'
    // borderColor: 'red',
    // borderWidth: 2
  },
  nycStation: {

  },
  blueDivider: {
    backgroundColor: '#223365',
    marginLeft: 0,
    marginRight: 0,
    borderBottomWidth: 0,
    height: 30
  },
  locationTitle: {
    backgroundColor: cssVariables.lighterGray,
    marginLeft: 0,
    marginRight: 0,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 0
  },
  otherStation: {

  },
  stationText: {
    fontSize: 15
  },
  originTo: {
    backgroundColor: cssVariables.darkerBlue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  clicked: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  }
});

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleClickedDestination: handleClick.handleClickedDestination,
  handleDestination: handleType.handleTypedDestination
}

export default connect( mapStateToProps, mapActionsToProps )( Destination );
