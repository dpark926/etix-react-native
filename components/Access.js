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

class Access extends Component<> {
  render() {
    return (
      <View>
        <Text>Access</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect( mapStateToProps )( Access );
