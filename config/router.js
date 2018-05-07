import React from 'react';
import { StackNavigator } from 'react-navigation';
// Components
import BuyTickets from '../components/BuyTickets';
import HomeHeader from '../components/HomeHeader';
// import Header from '../components/Header';
import Origin from '../components/Origin';
import Destination from '../components/Destination';
import TicketType from '../components/TicketType';
import TenTrip from '../components/ticketTypes/TenTrip';
import Monthly from '../components/ticketTypes/Monthly';
import OneWay from '../components/ticketTypes/OneWay';
import RoundTrip from '../components/ticketTypes/RoundTrip';
import Weekly from '../components/ticketTypes/Weekly';
import Accept from '../components/Accept';
import PaymentMethod from '../components/PaymentMethod';
import CardInfo from '../components/CardInfo';
import Wallet from '../components/Wallet';
import Access from '../components/Access';
// cssVariables
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
      },
    },
    TicketType: {
      screen: TicketType,
      navigationOptions: {
        title: 'Select Ticket Type',
      },
    },
    TenTrip: {
      screen: TenTrip,
      navigationOptions: {
        title: 'Select Ticket',
      },
    },
    Monthly: {
      screen: Monthly,
      navigationOptions: {
        title: 'Select Ticket',
      },
    },
    OneWay: {
      screen: OneWay,
      navigationOptions: {
        title: 'Select Ticket',
      },
    },
    RoundTrip: {
      screen: RoundTrip,
      navigationOptions: {
        title: 'Select Ticket',
      },
    },
    Weekly: {
      screen: Weekly,
      navigationOptions: {
        title: 'Select Ticket',
      },
    },
    Accept: {
      screen: Accept,
      navigationOptions: {
        title: 'Select Ticket',
      },
    },
    PaymentMethod: {
      screen: PaymentMethod,
      navigationOptions: {
        title: 'Select Payment Method',
      },
    },
    CardInfo: {
      screen: CardInfo,
      navigationOptions: {
        title: 'Select Payment Method',
      },
    },
    Wallet: {
      screen: Wallet,
      navigationOptions: {
        title: 'Ticket Wallet',
      },
    },
    Access: {
      screen: Access,
      navigationOptions: {
        title: 'Ticket',
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