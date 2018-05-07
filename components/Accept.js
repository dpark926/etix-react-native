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
import Disclaimer from './Disclaimer';
// cssVariables
import cssVariables from '../styles/cssVariables';

class Accept extends Component<> {
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
          <Text style={[styles.clicked, styles.clickedBold]}>{this.props.clickReducer.clickedOrigin}</Text>
          <Text style={[styles.clicked, styles.clickedBold]}>{this.props.clickReducer.clickedDestination}</Text>
        </View>
        <View style={[styles.originTo, styles.ticketDescription]}>
          <Text style={styles.clicked}>{this.props.clickReducer.ticketType}</Text>
          <Text style={styles.clicked}>{this.props.clickReducer.ticket}</Text>
        </View>
        <View style={styles.tabContainer}>
          <View style={styles.tabSingle}>
            <Text style={styles.tabSingleText}>Single</Text>
          </View>
          <View style={styles.tabMultiple}>
            <Text style={styles.tabMultipleText}>Multiple</Text>
          </View>
        </View>
        <View style={styles.acceptContainer}>
          <View style={styles.acceptHeader}>
            <Text style={styles.acceptHeaderText}>Ticket regulations</Text>
            <Text></Text>
          </View>
          <View style={styles.disclaimerTicketTypes}>
            <Text style={styles.disclaimerTicketTypesText}>{this.props.clickReducer.ticketType}</Text>
            <Text style={styles.disclaimerTicketTypesText}>{this.props.clickReducer.ticket}</Text>
          </View>
          <View style={styles.disclaimer}>
            <Disclaimer
              ticketType={this.props.clickReducer.ticketType}
              ticket={this.props.clickReducer.ticket}
            />
          </View>
          <View style={styles.acceptButton}>
            <Text style={styles.acceptButtonText}>Accept & Continue</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    color: 'white',
    paddingRight: 5
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
  },
  acceptContainer: {
    backgroundColor: cssVariables.darkerBlue,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 65,
    // alignSelf: 'flex-end',
  },
  acceptHeader: {
    paddingTop: 5,
    // paddingBottom: 20,
    // marginBottom: 10
  },
  acceptHeaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  disclaimer: {
    height: 270,
    // overflow: 'auto'
  },
  disclaimerTicketTypes: {
    flexDirection: 'row',
    marginBottom: 10
  },
  disclaimerTicketTypesText: {
    color: 'white',
    paddingRight: 5
  },
  acceptButton: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'white',
  },
  acceptButtonText: {
    textAlign: 'center',
    fontSize: 18,
    color: cssVariables.darkerBlue,
  }
});

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleTicket: handleClick.handleTicketType
}

export default connect( mapStateToProps, mapActionsToProps )( Accept );