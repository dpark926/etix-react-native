import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

function BlackBar(props) {
  return (
    <View style={styles.blackBar}>
      {/* <View style={styles.yellowProgress}></View> */}
      <View style={{backgroundColor: 'orange', flexGrow: props.yellowWidth, borderColor: 'orange', borderWidth: 2}}></View>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  blackBar: {
    flexDirection: 'row',
    backgroundColor: '#011f4b',
    height: 7
  },
  // yellowProgress: {
  //   backgroundColor: 'orange',
  //   flexGrow: 0.1,
  //   borderColor: 'orange',
  //   borderWidth: 2
  // },
})

export default BlackBar;
