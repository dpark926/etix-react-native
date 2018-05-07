import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
// Components
import BlackBar from './BlackBar';
// cssVariables
import cssVariables from '../styles/cssVariables';

class PaymentMethod extends Component<> {
  render() {
    const yellowWidth = 0.6;

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
        <View style={styles.costWrapper}>
          <Text style={styles.costTotal}>Total:</Text>
          <Text style={styles.costPrice}>{this.props.clickReducer.cost}</Text>
        </View>
        <Text style={styles.splitPayments}>Split Payment</Text>
        <Text style={styles.paymentMethod}>Payment methods</Text>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('CardInfo')}>
          <View style={styles.stationItem}>
            <Text style={styles.stationText}>American Express</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('CardInfo')}>
          <View style={styles.stationItem}>
            <Text style={styles.stationText}>Pay with New Card</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('CardInfo')}>
          <View style={styles.stationItem}>
            <Text style={styles.stationText}>Pay with MasterPass</Text>
          </View>
        </TouchableHighlight>
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
  costWrapper: {
    backgroundColor: cssVariables.darkBlue,
    flexDirection: 'row',
    padding: 10
  },
  costTotal: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    flex: 0.5,
  },
  costPrice: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    flex: 0.5,
    textAlign: 'right'
  },
  splitPayments: {
    padding: 15,
    fontSize: 17,
    textAlign: 'right'
  },
  paymentMethod: {
    backgroundColor: cssVariables.lightGray,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 17
  },
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
})

const mapStateToProps = state => {
  return state;
};

export default connect( mapStateToProps )( PaymentMethod );
