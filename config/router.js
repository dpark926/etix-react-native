import React from 'react';
import { StackNavigator } from 'react-navigation';

// import Header from '../components/Header';
import BuyTickets from '../components/BuyTickets';
import Origin from '../components/Origin';
import ImageHeader from '../components/ImageHeader';

export const RootStack = StackNavigator(
  {
    Home: {
      screen: BuyTickets,
      navigationOptions: {
        title: 'MTA eTix',
        header: <ImageHeader/>
      },
    },
    Origin: {
      screen: Origin,
    }
  }
)