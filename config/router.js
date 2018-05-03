import React from 'react';
import { StackNavigator } from 'react-navigation';

import BuyTickets from '../components/BuyTickets';
import Origin from '../components/Origin';
import HomeHeader from '../components/HomeHeader';
import Header from '../components/Header';
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