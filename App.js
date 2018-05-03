import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import { RootStack } from './config/router';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RootStack/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderColor: 'red',
    // borderWidth: 2
  }
});
