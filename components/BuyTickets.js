import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

function BuyTickets() {
  return (
    <View style={styles.buyTickets}>
      <View style={styles.headerContainer}>
        <Image source={require('../styles/imgs/mta_logo.png')} />
        {/* <Text style={styles.headerText}>Hamburger</Text> */}
      </View>
      <View style={styles.buyTicketContainer}>
        <View>
          <View style={styles.button}>
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

const styles = StyleSheet.create({
  buyTickets: {

  },
  headerContainer: {
    flexDirection: 'row',
    // backgroundColor: '#223365',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 2
    // borderColor: 'yellow',
    // borderWidth: 2
  },
  headerText: {
    color: 'white',
  },
  buyTicketContainer: {
    backgroundColor: '#223365',
    alignSelf: 'stretch',
    marginTop: 10,
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