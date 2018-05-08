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
  constructor() {
    super();

    let divStyle = []

    for (var i = 0; i < 3; i++) {
      let threeColors = []
      for (var j = 0; j < 3; j ++) {
        let r = Math.floor(Math.random() * 256)
        threeColors.push(r)
      }

      divStyle.push('rgba(' + threeColors + ',1)')
    }

    this.state = {
      activated: (new Date()).toLocaleTimeString(),
      blockColor1: divStyle[0],
      blockColor2: divStyle[1],
      blockColor3: divStyle[2],
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View style={styles.blockContainer}>
            <View style={[styles.block, styles.blockOne, {backgroundColor: this.state.blockColor1}]}></View>
            <View style={[styles.block, styles.blockTwo, {backgroundColor: this.state.blockColor2}]}></View>
            <View style={[styles.block, styles.blockThree, {backgroundColor: this.state.blockColor3}]}></View>
          </View>
          <Text style={styles.blockText}>Tap to reveal barcode</Text>
          <View style={styles.buttonWrapper}>
            <View style={styles.button}></View>
          </View>
        </View>
        <View style={styles.ticketInfoWrapper}>
          <View style={styles.ticketActivated}>
            <Text style={styles.ticketActivatedText}>Ticket activated at {this.state.activated.slice(0, 4)} {this.state.activated.slice(-2)}</Text>
          </View>
          <View style={styles.ticketTypes}>
            <Text style={styles.ticketTypesText}>{this.props.clickReducer.ticketType}</Text>
            <Text style={styles.ticketTypesText}>{this.props.clickReducer.ticket}</Text>
            {/* <Text style={styles.ticketTypesText}>One Way Example</Text> */}
          </View>
          <View style={styles.ticketStampWrapper}>
            <Text style={styles.ticketStampHeaderText}>Long Island Rail Road</Text>
            <View style={styles.ticketStampInfo}>
              <View style={styles.ticketStampInfoLeft}>
                <Text style={styles.ticketStampInfoLeftText}>{this.props.clickReducer.clickedOrigin}</Text>
                <Text style={styles.ticketStampInfoLeftNum}>3</Text>
                <Text style={styles.ticketStampInfoLeftText}>{this.props.clickReducer.clickedDestination}</Text>
                <Text style={styles.ticketStampInfoLeftNum}>1</Text>
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

const styles = StyleSheet.create({
  blockContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  block: {
    flex: 1,
    height: 100,
  },
  blockOne: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  blockTwo: {
  },
  blockThree: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  },
  blockText: {
    textAlign: 'center',
    fontSize: 11,
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
    width: 85,
    height: 40,
    borderBottomRightRadius: 60,
    borderBottomLeftRadius: 60,
    backgroundColor: cssVariables.darkBlue
  },
  ticketInfoWrapper: {
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: cssVariables.lighterGray,
  },
  ticketActivated: {
    backgroundColor: '#ED203E',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5
  },
  ticketActivatedText: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: '700'
  },
  ticketTypes: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderBottomColor: cssVariables.gray,
    marginTop: 5,
    marginBottom: 5
  },
  ticketTypesText: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 3,
    paddingLeft: 3,
    fontSize: 16,
    fontWeight: '600',
  },
  ticketStampWrapper: {
    marginTop: 5,
    marginBottom: 5,
  },
  ticketStampHeaderText: {
    fontWeight: '600',
    padding: 5,
    fontSize: 11,
    backgroundColor: 'white'
  },
  ticketStampInfo: {
    backgroundColor: '#cdecf5',
    flexDirection: 'row',
    paddingTop: 5,
    paddingBottom: 20
  },
  ticketStampInfoLeft: {
    flexDirection: 'column',
    flex: 0.7
  },
  ticketStampInfoLeftText: {
    textAlign: 'right',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
    lineHeight: 40
  },
  ticketStampInfoLeftNum: {
    textAlign: 'right',
    fontSize: 38,
    fontWeight: '700',
    lineHeight: 38,
    marginTop: 10,
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
  },
  ticketStampInfoRightText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  trainTimeButton: {
    backgroundColor: cssVariables.darkerBlue,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
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
