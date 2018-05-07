import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
// Components
import BlackBar from './BlackBar';
// cssVariables
import cssVariables from '../styles/cssVariables';

class Wallet extends Component<> {
  render() {
    return (
      <View style={styles.walletContainer}>
        <View style={styles.walletHeader}>
          <View style={styles.tickets}>
            <Text style={[styles.walletHeaderText, styles.ticketsText]}>Tickets</Text>
          </View>
          <View style={styles.history}>
            <Text style={[styles.walletHeaderText, styles.historyText]}>History</Text>
          </View>
        </View>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Access')}>
          <View style={styles.walletTicketWrapper}>
            <View style={[styles.walletTicketSection, styles.ticketSectionTop]}>
              <Text style={styles.walletTicketText}>{this.props.clickReducer.ticketType}</Text>
              <Text style={styles.walletTicketText}>{this.props.clickReducer.ticket}</Text>
            </View>
            <View style={styles.walletTicketSection}>
              <Text style={styles.walletTicketText}>{this.props.clickReducer.clickedOrigin}</Text>
              <Text style={styles.walletTicketText}>{this.props.clickReducer.clickedDestination}</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  walletContainer: {
    backgroundColor: cssVariables.darkerBlue,
    flex: 1
  },
  walletHeader: {
    borderRadius: 5,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 5
  },
  walletHeaderText: {
    textAlign: 'center'
  },
  tickets: {
    flex: 0.5,
    padding: 5,
  },
  history: {
    flex: 0.5,
    backgroundColor: cssVariables.darkBlue,
    padding: 5,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  ticketsText: {
    fontSize: 16
  },
  historyText: {
    color: 'white',
    fontSize: 16
  },
  walletTicketWrapper: {
    backgroundColor: 'white',
    margin: 15,
    borderRadius: 5,
    padding: 15
  },
  walletTicketSection: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  ticketSectionTop: {
    borderBottomWidth: 1,
    borderBottomColor: cssVariables.lightGray,
    paddingBottom: 10
  },
  ticketSectionBottom: {
    paddingTop: 10
  },
  walletTicketText: {
    fontSize: 16,
    paddingTop: 5,
    paddingBottom: 5
  }
})

const mapStateToProps = state => {
  return state;
};

export default connect( mapStateToProps )( Wallet );
