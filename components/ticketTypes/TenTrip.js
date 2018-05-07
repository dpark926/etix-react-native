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

class TenTrip extends Component<> {
  handleTicket = (text) => {
    this.props.handleTicket(text);
    this.props.navigation.navigate('Accept');
  }

  render() {
    const yellowWidth = 0.5;

    return (
      <View>
        <BlackBar yellowWidth={yellowWidth}/>
        <View style={styles.originTo}>
          <Text style={[styles.clicked, styles.clickedBold]}>{this.props.clickReducer.clickedOrigin}</Text>
          <Text style={[styles.clicked, styles.clickedBold]}>{this.props.clickReducer.clickedDestination}</Text>
        </View>
        <View style={[styles.originTo, styles.ticketDescription]}>
          <Text style={styles.clicked}>{this.props.clickReducer.ticketType}</Text>
        </View>
        <View style={styles.tabContainer}>
          <View style={styles.tabSingle}>
            <Text style={styles.tabSingleText}>Single</Text>
          </View>
          <View style={styles.tabMultiple}>
            <Text style={styles.tabMultipleText}>Multiple</Text>
          </View>
        </View>
        <TouchableHighlight onPress={() => this.handleTicket('Peak')}>
          <View style={styles.stationItem}>
            <Text style={styles.stationText}>Peak</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Off Peak')}>
          <View style={styles.stationItem}>
            <Text style={styles.stationText}>Off Peak</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Senior')}>
          <View style={styles.stationItem}>
            <Text style={styles.stationText}>Senior / Disabled / Medicare</Text>
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
    paddingTop: 20,
    paddingBottom: 20,
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
    color: 'white'
  },
  clickedBold: {
    fontWeight: 'bold',
  },
  ticketDescription: {
    paddingBottom: 5
  },
  tabContainer: {
    backgroundColor: cssVariables.darkBlue,
    flexDirection: 'row',
  },
  tabSingle: {
    backgroundColor: cssVariables.lighterGray,
    borderTopRightRadius: 8,
    padding: 10,
    marginTop: 5,
    flex: 0.5,
  },
  tabSingleText: {
    textAlign: 'center'
  },
  tabMultiple: {
    padding: 10,
    marginTop: 5,
    flex: 0.5,
  },
  tabMultipleText: {
    color: 'white',
    textAlign: 'center'
  }
});

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleTicket: handleClick.handleTicketType
}

export default connect( mapStateToProps, mapActionsToProps )( TenTrip );