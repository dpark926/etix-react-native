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
import handleClick from '../../actions/clickActions';
// Reducers
import handleType from '../../actions/typeActions';
// Components
import BlackBar from '../BlackBar';
// cssVariables
import cssVariables from '../../styles/cssVariables';

class OneWay extends Component<> {
  handleTicket = (text) => {
    this.props.handleTicket(text);
    // this.props.navigation.navigate(text);
  }

  render() {
    const yellowWidth = 0.5;

    return (
      <View>
        <BlackBar yellowWidth={yellowWidth}/>
        <View style={styles.originTo}>
          <Text style={styles.clicked}>{this.props.clickReducer.clickedOrigin}</Text>
          <Text style={styles.clicked}>{this.props.clickReducer.clickedDestination}</Text>
        </View>
        <View style={styles.originTo}>
          <Text style={styles.clicked}>{this.props.clickReducer.ticketType}</Text>
        </View>
        <TouchableHighlight onPress={() => this.handleTicket('Peak')}>
          <View style={styles.stationItem}>
            <Text>Peak</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Off Peak')}>
          <View style={styles.stationItem}>
            <Text>Off Peak</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Senior')}>
          <View style={styles.stationItem}>
            <Text>Senior / Disabled / Medicare</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Family')}>
          <View style={styles.stationItem}>
            <Text>Family</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Military')}>
          <View style={styles.stationItem}>
            <Text>Military</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Disabled')}>
          <View style={styles.stationItem}>
            <Text>Disabled</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Child Peak')}>
          <View style={styles.stationItem}>
            <Text>Child Peak</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Child Off Peak')}>
          <View style={styles.stationItem}>
            <Text>Child Off Peak</Text>
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
  handleTicket: handleClick.handleTicketType
}

export default connect( mapStateToProps, mapActionsToProps )( OneWay );