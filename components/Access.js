import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
// Components
import BlackBar from './BlackBar';
// cssVariables
import cssVariables from '../styles/cssVariables';

class Access extends Component<> {
  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.blockContainer}>
            <View style={[styles.block, styles.blockOne]}></View>
            <View style={[styles.block, styles.blockTwo]}></View>
            <View style={[styles.block, styles.blockThree]}></View>
          </View>
          <Text style={styles.blockText}>Tap to reveal barcode</Text>
          <View style={styles.buttonWrapper}>
            <View style={styles.button}></View>
          </View>
        </View>
        <View style={styles.ticketInfoWrapper}>
          <View style={styles.ticketActivated}>
            <Text style={styles.ticketActivatedText}>Ticket activated at </Text>
          </View>
          <View style={styles.ticketTypes}>
            <Text style={styles.ticketTypesText}>One Way Example</Text>
          </View>
          <View style={styles.ticketStampWrapper}>
            <Text style={styles.ticketStampHeaderText}>Long Island Rail Road</Text>
            <View style={styles.ticketStampInfo}>
              <View style={styles.ticketStampInfoLeft}>
                <Text style={styles.ticketStampInfoLeftText}>{this.props.clickReducer.clickedOrigin}</Text>
                <Text style={styles.ticketStampInfoLeftText}>3</Text>
                <Text style={styles.ticketStampInfoLeftText}>{this.props.clickReducer.clickedDestination}</Text>
                <Text style={styles.ticketStampInfoLeftText}>1</Text>
              </View>
              <View style={styles.ticketStampInfoRight}>
                <View style={styles.ticketStampInfoRightBorder}>
                  <Text style={styles.ticketStampInfoRightText}>C</Text>
                  <Text style={styles.ticketStampInfoRightText}>I</Text>
                  <Text style={styles.ticketStampInfoRightText}>T</Text>
                  <Text style={styles.ticketStampInfoRightText}>Y</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.trainTimeButton}>
            <Text style={styles.trainTimeButtonText}>Train Time</Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

let divStyle = []

for (var i = 0; i < 3; i++) {
  let threeColors = []
  for (var j = 0; j < 3; j ++) {
    let r = Math.floor(Math.random() * 256)
    threeColors.push(r)
  }

  divStyle.push('rgba(' + threeColors + ',1)')
}

const styles = StyleSheet.create({
  blockContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    // borderWidth: 1
  },
  block: {
    flex: 1,
    height: 100,
  },
  blockOne: {
    backgroundColor: divStyle[0],
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  blockTwo: {
    backgroundColor: divStyle[1]
  },
  blockThree: {
    backgroundColor: divStyle[2],
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  blockText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    marginBottom: 10
  },
  buttonWrapper: {
    borderTopWidth: 2,
    borderTopColor: cssVariables.gray,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    width: 90,
    height: 45,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    backgroundColor: cssVariables.darkerBlue
  },
  ticketInfoWrapper: {
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: cssVariables.lighterGray
  },
  ticketActivated: {
    backgroundColor: '#d62d20',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5
  },
  ticketActivatedText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: '600'
  },
  ticketTypes: {
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: cssVariables.gray,
    marginTop: 5,
    marginBottom: 5
  },
  ticketTypesText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  ticketStampWrapper: {
    marginTop: 5,
    marginBottom: 5,
  },
  ticketStampHeaderText: {
    fontWeight: '500',
    padding: 5,
  },
  ticketStampInfo: {
    backgroundColor: '#cdecf5',
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15
  },
  ticketStampInfoLeft: {
    flexDirection: 'column',
    flex: 0.7
  },
  ticketStampInfoLeftText: {
    textAlign: 'right',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 5,
    // marginBottom: 5,
    lineHeight: 40
  },
  ticketStampInfoRight: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ticketStampInfoRightBorder: {
    borderWidth: 2,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 15,
    paddingLeft: 15

    // transform: [{rotate: '90deg'}]
  },
  ticketStampInfoRightText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  trainTimeButton: {
    backgroundColor: cssVariables.darkerBlue,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 30
  },
  trainTimeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

const mapStateToProps = state => {
  return state;
};

export default connect( mapStateToProps )( Access );
