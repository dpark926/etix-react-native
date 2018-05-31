import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  Animated,
  Easing
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

    let d = new Date()

    this.state = {
      activated: (new Date()).toLocaleTimeString(),
      blockColor1: divStyle[0],
      blockColor2: divStyle[1],
      blockColor3: divStyle[2],
      fadeAnim: new Animated.Value(0),
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds(),
      time: d.toLocaleTimeString(),
    }

    this.animatedValue = new Animated.Value(0)
  }

  // componentDidMount() {
  //   Animated.timing(                  // Animate over time
  //     this.state.fadeAnim,            // The animated value to drive
  //     {
  //        toValue: 1,                   // Animate to opacity: 1 (opaque)
  //        duration: 1000,              // Make it take a while
  //        toValue: 0.5,                   // Animate to opacity: 1 (opaque)
  //        duration: 1000,
  //     }
  //   ).start();                        // Starts the animation
  // }

  countingSecond = () => {
    let d = new Date()
    this.setState({
      day: d.getDay(),
      month: d.getMonth(),
      date: d.getDate(),
      year: d.getFullYear(),
      hour: d.getHours(),
      minute: d.getMinutes(),
      second: d.getSeconds(),
      milliseconds: d.getMilliseconds(),
      time: d.toLocaleTimeString()
    })
  }

  componentDidMount() {
    this.animate()
  }

  componentWillMount() {
    setInterval(this.countingSecond, 1000)
  }

  animate() {
    this.animatedValue.setValue(0);

    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 3400,
        easing: Easing.linear
      }
    ).start(() => this.animate())
  }

  render() {

    // const marginLeft = this.animatedValue.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0, 300]
    // })
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0.5, 1, 0.5]
    })
    const movingMargin = this.animatedValue.interpolate({
      // inputRange: [0, 0.15, 0.25, 0.35, 0.5, 0.65, 0.75, 0.85, 1],
      // outputRange: [-150, -100, 0, 50, 150, 50, 0, -100, -150]
      inputRange: [0, 0.5, 1],
      outputRange: [-160, 160, -160]

    })
    // const textSize = this.animatedValue.interpolate({
    //   inputRange: [0, 0.5, 1],
    //   outputRange: [18, 32, 18]
    // })
    // const rotateX = this.animatedValue.interpolate({
    //   inputRange: [0, 0.5, 1],
    //   outputRange: ['0deg', '180deg', '0deg']
    // })

    let {fadeAnim} = this.state;

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
      <ScrollView>
        <View>
          {/* <Animated.View
            style={{
              marginLeft,
              height: 30,
              width: 40,
              backgroundColor: 'red'}} /> */}
          {/* <Animated.View
            style={{
              opacity,
              marginTop: 10,
              height: 30,
              width: 40,
              backgroundColor: 'blue'}} /> */}
          {/* <Animated.View
            style={{
              marginLeft: movingMargin,
              marginTop: 10,
              height: 30,
              width: 40,
              backgroundColor: 'orange'}} /> */}
          {/* <Animated.Text
            style={{
              marginLeft: movingMargin,
              color: 'green'}} >
              Animated Text!
          </Animated.Text>
          <Animated.Text
            style={{
              fontSize: textSize,
              marginTop: 10,
              color: 'green'}} >
              Animated Text!
          </Animated.Text> */}
          {/* <Animated.View
            style={{
              transform: [{rotateX}],
              marginTop: 50,
              height: 30,
              width: 40,
              backgroundColor: 'black'}}>
            <Text style={{color: 'white'}}>Hello from TransformX</Text>
          </Animated.View> */}

          {/* <Animated.View style={[styles.blockContainer, {opacity: fadeAnim}]}>
            <View style={[styles.block, styles.blockOne, {backgroundColor: this.state.blockColor1}]}></View>
            <View style={[styles.block, styles.blockTwo, {backgroundColor: this.state.blockColor2}]}></View>
            <View style={[styles.block, styles.blockThree, {backgroundColor: this.state.blockColor3}]}></View>
          </Animated.View> */}

          <View style={{height: 120}}>
            <Animated.View style={{
              opacity,
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 15,
              marginRight: 15,
              // height: 100,
              // position: 'absolute'
            }}>
              <View style={[styles.block, styles.blockOne, {backgroundColor: this.state.blockColor1}]}></View>
              <View style={[styles.block, styles.blockTwo, {backgroundColor: this.state.blockColor2}]}></View>
              <View style={[styles.block, styles.blockThree, {backgroundColor: this.state.blockColor3}]}></View>
            </Animated.View>
            <Animated.View style={{marginLeft: movingMargin, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  fontWeight: '600',
                  marginTop: 5,
                  // shadowColor: 'black',
                  shadowOffset: {width: 2, height: 2},
                  shadowOpacity: 0.9,
                  textShadowColor: 'black',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 14,
                  shadowRadius: 4,
                }}>
                {this.state.time}
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 30,
                  fontWeight: '600',
                  marginTop: -5,
                  // shadowColor: '#000',
                  shadowOffset: { width: 2, height: 2},
                  shadowOpacity: 0.9,
                  textShadowColor: 'black',
                  textShadowOffset: {width: 2, height: 2},
                  textShadowRadius: 14,
                  shadowRadius: 4,
                }}>
                {this.state.month < 10 ? '0' : ''}{this.state.month + 1}/{this.state.date < 10 ? '0' + this.state.date : this.state.date}/{this.state.year}
              </Text>
            </Animated.View>
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
    position: 'absolute',
    width: 115,
  },
  blockOne: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    left: 0
  },
  blockTwo: {
  },
  blockThree: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    right: 0
  },
  blockText: {
    textAlign: 'center',
    fontSize: 11,
    fontWeight: '600',
    marginBottom: 10
  },
  time: {
    color: 'white',
    fontSize: 32,
    fontWeight: '500'
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
