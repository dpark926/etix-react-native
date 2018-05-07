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

class CardInfo extends Component<> {
  render() {
    const yellowWidth = 1;

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
        <View style={styles.cardInfoContainer}>
          <Text style={styles.cardInfoText}>Security Code</Text>
          <TextInput
            style={styles.secCodeInput}
          />
          <Text style={styles.cardInfoText}>Please enter a security code at least 3 digits long</Text>
          <Text style={styles.cardInfoText}>Enter the email address below that you would like your receipt sent to.</Text>
          <Text style={styles.cardInfoText}>Your E-mail</Text>
          <TextInput style={styles.emailInput}/>
          <Text style={styles.cardInfoText}>This ticket purchase is subject to accepting the terms and conditions</Text>
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Wallet')}>
            <View style={styles.acceptButton}>
              <Text style={styles.acceptButtonText}>Accept & Pay</Text>
            </View>
          </TouchableHighlight>
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
  cardInfoContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  secCodeInput: {
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderColor: '#a7adba',
    color: '#a7adba',
    width: '40%',
    height: 30,
    padding: 5
  },
  cardInfoText: {
    marginTop: 5,
    marginBottom: 5
  },
  emailInput: {
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderColor: '#a7adba',
    color: '#a7adba',
    height: 30,
    padding: 5
  },
  acceptButton: {
    backgroundColor: cssVariables.lightGray,
    padding: 10,
    borderRadius: 5
  },
  acceptButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold'
  }
})

const mapStateToProps = state => {
  return state;
};

export default connect( mapStateToProps )( CardInfo );
