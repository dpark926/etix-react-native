import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
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
            <Image style={styles.paymentIcon} source={require('../styles/imgs/amex_logo.jpeg')} />
            <Text style={styles.stationText}>American Express</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('CardInfo')}>
          <View style={styles.stationItem}>
            <Image style={styles.paymentIcon} source={require('../styles/imgs/plus_add_icon.png')} />
            <Text style={styles.stationText}>Pay with New Card</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('CardInfo')}>
          <View style={styles.stationItem}>
            <Image style={styles.paymentIcon} source={require('../styles/imgs/masterpass_icon.png')} />
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
    fontSize: 15,
    color: 'white',
    paddingRight: 5
  },
  clickedBold: {
    fontWeight: 'bold',
  },
  ticketDescription: {
    paddingBottom: 10
  },
  costWrapper: {
    backgroundColor: cssVariables.darkBlue,
    flexDirection: 'row',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 15,
    paddingLeft: 15,
  },
  costTotal: {
    color: 'white',
    fontSize: 19,
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
    backgroundColor: 'white',
    padding: 15,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'right',
  },
  paymentMethod: {
    backgroundColor: cssVariables.lighterGray,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
    fontWeight: '600'
  },
  stationItem: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 28,
    paddingBottom: 28,
    borderBottomColor: cssVariables.lightGray,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center'
  },
  stationText: {
    fontSize: 16,
    fontWeight: '600'
  },
  paymentIcon: {
    width: 45,
    height: 30,
    marginRight: 10
    // flexGrow: 1,
  }
})

const mapStateToProps = state => {
  return state;
};

export default connect( mapStateToProps )( PaymentMethod );
