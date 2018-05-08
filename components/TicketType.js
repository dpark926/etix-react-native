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
      <View style={styles.ticketTypeContainer}>
        <BlackBar yellowWidth={yellowWidth}/>
        <View style={styles.originTo}>
          <Text style={styles.clicked}>{this.props.clickReducer.clickedOrigin}</Text>
          <Text style={styles.clicked}>{this.props.clickReducer.clickedDestination}</Text>
        </View>
        <ScrollView>
          <TouchableHighlight onPress={() => this.handleTicketType('Ten Trip')}>
            <View style={styles.stationItem}>
              <Text style={styles.stationText}>Ten Trip</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.handleTicketType('Monthly')}>
            <View style={styles.stationItem}>
              <Text style={styles.stationText}>Monthly</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.handleTicketType('One Way')}>
            <View style={styles.stationItem}>
              <Text style={styles.stationText}>One Way</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.handleTicketType('Round Trip')}>
            <View style={styles.stationItem}>
              <Text style={styles.stationText}>Round Trip</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => this.handleTicketType('Weekly')}>
            <View style={styles.stationItem}>
              <Text style={styles.stationText}>Weekly</Text>
            </View>
          </TouchableHighlight>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ticketTypeContainer: {
    height: '100%',
    backgroundColor: 'white'
  },
  stationItem: {
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 27,
    paddingBottom: 27,
    borderBottomColor: cssVariables.lightGray,
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  stationText: {
    fontSize: 16
  },
  originTo: {
    backgroundColor: cssVariables.darkerBlue,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 15,
    paddingRight: 15,
  },
  clicked: {
    fontSize: 15,
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