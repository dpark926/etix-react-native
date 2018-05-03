import React from 'react';
import { StackNavigator } from 'react-navigation';

// import Header from '../components/Header';
import BuyTickets from '../components/BuyTickets';
import Origin from '../components/Origin';
import HomeHeader from '../components/HomeHeader';

export const RootStack = StackNavigator(
  {
    Home: {
      screen: BuyTickets,
      navigationOptions: {
        title: 'MTA eTix',
        header: <HomeHeader/>
      },
    },
    Origin: {
      screen: Origin,
      // navigationOptions: {
      //   title: 'MTA eTix',
      //   header: <ImageHeader/>
      // },
    }
  }
)