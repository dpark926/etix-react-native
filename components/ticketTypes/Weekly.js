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

class Weekly extends Component<> {
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
          <Text style={styles.clicked}>{this.props.clickReducer.clickedOrigin}</Text>
          <Text style={styles.clicked}>{this.props.clickReducer.clickedDestination}</Text>
        </View>
        <View style={styles.originTo}>
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
        <TouchableHighlight onPress={() => this.handleTicket('Weekly')}>
          <View style={styles.stationItem}>
            <Text>Weekly</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  stationItem: {
    marginLeft: 15,
    marginRight: 15,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomColor: cssVariables.lightGray,
    borderBottomWidth: 1,
    // borderColor: 'red',
    // borderWidth: 2
  },
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
    fontWeight: 'bold',
    color: 'white'
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
  }
});

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  handleTicket: handleClick.handleTicketType
}

export default connect( mapStateToProps, mapActionsToProps )( Weekly );