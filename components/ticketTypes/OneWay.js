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
    this.props.navigation.navigate('Accept');
  }

  render() {
    const yellowWidth = 0.5;

    return (
      <View style={styles.ticketContainer}>
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
        <TouchableHighlight onPress={() => this.handleTicket('Family')}>
          <View style={styles.stationItem}>
            <Text style={styles.stationText}>Family</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Military')}>
          <View style={styles.stationItem}>
            <Text style={styles.stationText}>Military</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.handleTicket('Disabled')}>
          <View style={styles.stationItem}>
            <Text style={styles.stationText}>Disabled</Text>
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
  ticketContainer: {
    height: '100%',
    backgroundColor: 'white'
  },
  stationItem: {
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 20,
    paddingBottom: 20,
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
    paddingLeft: 15,
    paddingRight: 15,
  },
  clicked: {
    fontSize: 15,
    color: 'white',
  },
  clickedBold: {
    fontWeight: 'bold',
  },
  ticketDescription: {
    paddingBottom: 10
  },
  tabContainer: {
    backgroundColor: cssVariables.darkBlue,
    flexDirection: 'row',
  },
  tabSingle: {
    backgroundColor: 'white',
    borderTopRightRadius: 8,
    padding: 10,
    marginTop: 5,
    flex: 0.5,
  },
  tabSingleText: {
    textAlign: 'center',
    fontSize: 15
  },
  tabMultiple: {
    padding: 10,
    marginTop: 5,
    flex: 0.5,
  },
  tabMultipleText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15
  }
});

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleTicket: handleClick.handleTicket
}

export default connect( mapStateToProps, mapActionsToProps )( OneWay );