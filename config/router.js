import React from 'react';
import { StackNavigator } from 'react-navigation';

import BuyTickets from '../components/BuyTickets';
import HomeHeader from '../components/HomeHeader';
// import Header from '../components/Header';
import Origin from '../components/Origin';
import Destination from '../components/Destination';
import cssVariables from '../styles/cssVariables';

export const RootStack = StackNavigator(
  {
    Home: {
      screen: BuyTickets,
      navigationOptions: {
        // title: 'MTA eTix',
        header: <HomeHeader/>
      },
    },
    Origin: {
      screen: Origin,
      navigationOptions: {
        title: 'Select Origin Station',
        // header: <Header/>
      },
    },
    Destination: {
      screen: Destination,
      navigationOptions: {
        title: 'Select Destination Station',
        // header: <Header/>
      },
    }
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      headerStyle: {
        backgroundColor: cssVariables.darkerBlue
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)