import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

class BuyTickets extends Component<> {
  render() {
    return (
      <View style={styles.buyTickets}>
        <View style={styles.buyTicketContainer}>
          <View>
            <View style={styles.button} onPress={() => this.props.navigation.navigate('Origin')}>
              <Button title='Origin' onPress={() => this.props.navigation.navigate('Origin')} />
              <Image style={styles.buttonImg} source={require('../styles/imgs/buy-ticket.png')} />
              <Text style={styles.buttonText}>
                Buy Tickets
              </Text>
              <Image style={styles.buttonArrow} source={require('../styles/imgs/right-arrow.png')} />
            </View>
            <View style={styles.button}>
              <Image style={styles.buttonImg} source={require('../styles/imgs/wallet.png')} />
              <Text style={styles.buttonText}>
                Ticket Wallet
              </Text>
              <Image style={styles.buttonArrow} source={require('../styles/imgs/right-arrow.png')} />
            </View>
            <View style={[styles.button, styles.blueButton]}>
              <Image style={styles.buttonImg} source={require('../styles/imgs/top_ticket.png')} />
              <Text style={styles.blueButtonText}>
                Your top tickets will appear here for quick access
              </Text>
              <View style={styles.emptyRight}></View>
            </View>
            <View style={styles.button}>
              <Image style={styles.buttonImg} source={require('../styles/imgs/train_time.png')} />
              <Text style={styles.buttonText}>
                Train Time
              </Text>
              <Image style={styles.buttonArrow} source={require('../styles/imgs/right-arrow.png')} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buyTickets: {

  },
  buyTicketContainer: {
    backgroundColor: '#223365',
    alignSelf: 'stretch',
    // borderColor: 'orange',
    // borderWidth: 2
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonImg: {
    width: 50,
    flexGrow: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    flexGrow: 50,
  },
  buttonArrow: {
    flexGrow: 1,
  },
  blueButton: {
    backgroundColor: '#445588',
    marginTop: -2
  },
  blueButtonText: {
    color: 'white',
    fontSize: 16,
    maxWidth: 280
  },
  emptyRight: {
    width: 50,
    // borderColor: 'yellow',
    // borderWidth: 2
  }
});

export default BuyTickets;