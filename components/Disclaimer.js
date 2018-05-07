import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import DISCLAIMERS from '../config/DISCLAIMERS';

class Disclaimer extends Component<> {
  render() {
    const defaultMsg = (
      <ScrollView>
        <Text style={styles.disclaimerList}>Good for one ride between the zones or stations indicated on the ticket durring off-peak hours only and is subject to step-up on Peak trains.</Text>
        <Text style={styles.disclaimerList}>Charged on any train NOT scheduled to arrive in NYC terminals between 6am and 10am or departing NYC terminals between 4pm and 8pm weekdays and select holidays.</Text>
        <Text style={styles.disclaimerList}>Valid for 60 days (including date of sale).</Text>
        <Text style={styles.disclaimerList}>Tickets purchased in error may be cancelled within 5 minutes or purchase without the $10 fee being applied.</Text>
        <Text style={styles.disclaimerList}>Ticket must be activated prior to boarding train for use.</Text>
        <Text style={styles.disclaimerList}>Ticket must be presented to conductor upon request and the Bar Code activated if requested.</Text>
        <Text style={styles.disclaimerList}>Once activated, ticket will expire after a predetermined length of time for the trip selected.</Text>
        <Text style={styles.disclaimerList}>Subject to applicable tariff regulations and conditions of use.</Text>
      </ScrollView>
    )

    // const result = DISCLAIMERS.filter( obj =>
    //   obj.ticket === props.ticketType.replace(/\s+/g, '-').toLowerCase()
    // )
    //
    // if ( !result || result.length === 0 ) {
    //   return defaultMsg;
    // }
    //
    // const disclaimerResult = result[0].options.filter( obj =>
    //   obj.ticketType === props.ticket.replace(/\s+/g, '-').toLowerCase()
    // )
    //
    // if ( !disclaimerResult || disclaimerResult.length === 0 ) {
    //   return defaultMsg;
    // } else {
    //   return (
    //     <ul dangerouslySetInnerHTML={{ __html: disclaimerResult[0].disclaimer }}></ul>
    //   );
    // }
    return defaultMsg;
  }
}

const styles = StyleSheet.create({
  disclaimerList: {
    color: 'white',
    marginBottom: 5
  }
})

export default Disclaimer;