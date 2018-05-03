import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

function BuyTickets() {
  return (
    <View style={styles.test}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Hamburger</Text>
        <Text style={styles.headerText}>Logo</Text>
      </View>
      <View style={styles.buyTicketContainer}>
        <View>
          <View>

          </View>
          <View>
            <Text style={styles.buttonText}>
              Buy Tickets
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  test: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  headerContainer: {
    // position: enum('absolute'),
    // width: '100%',
    flexDirection: 'row',
    backgroundColor: '#223365',
    borderColor: 'yellow',
    borderWidth: 2
  },
  headerText: {
    color: 'white',
    marginTop: 20,
  },
  buyTicketContainer: {
    backgroundColor: '#223365',
    alignSelf: 'stretch',
    borderColor: 'orange',
    borderWidth: 2
  },
  buttonText: {
    color: 'white'
  }
});

export default BuyTickets;