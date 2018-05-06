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
// cssVariables
import cssVariables from '../styles/cssVariables';

class TicketType extends Component<> {
  handleTicketType = (text) => {
    this.props.handleTicketType(text);
    this.props.navigation.navigate(text.split(' ').join(''));
  }

  render() {
    const yellowWidth = 0.3;

    return (
      <View>
        <BlackBar yellowWidth={yellowWidth}/>
        <View style={styles.originTo}>
          <Text style={styles.clicked}>{this.props.clickReducer.clickedOrigin}</Text>
          <Text style={styles.clicked}>{this.props.clickReducer.clickedDestination}</Text>
        </View>
        <TouchableHighlight onPress={() => this.handleTicketType('Ten Trip')}>
          <View style={styles.stationItem}>
            <Text>Ten Trip</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicketType('Monthly')}>
          <View style={styles.stationItem}>
            <Text>Monthly</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicketType('One Way')}>
          <View style={styles.stationItem}>
            <Text>One Way</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicketType('Round Trip')}>
          <View style={styles.stationItem}>
            <Text>Round Trip</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicketType('Weekly')}>
          <View style={styles.stationItem}>
            <Text style={styles.stationText}>Weekly</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  stationItem: {
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomColor: cssVariables.lightGray,
    borderBottomWidth: 1,
    // borderColor: 'red',
    // borderWidth: 2
  },
  stationText: {
    fontSize: 16
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
})

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleTicketType: handleClick.handleTicketType
}

export default connect( mapStateToProps, mapActionsToProps )( TicketType );