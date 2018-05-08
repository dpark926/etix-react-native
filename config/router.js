import React from 'react';
import { StackNavigator } from 'react-navigation';
// Components
import BuyTickets from '../components/BuyTickets';
import HomeHeader from '../components/HomeHeader';
import Header from '../components/Header';
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
        header: <Header title='Select Origin Station'/>
      },
    },
    Destination: {
      screen: Destination,
      navigationOptions: {
        header: <Header title='Select Destination Station'/>
      },
    },
    TicketType: {
      screen: TicketType,
      navigationOptions: {
        header: <Header title='Select Ticket Type'/>
      },
    },
    TenTrip: {
      screen: TenTrip,
      navigationOptions: {
        header: <Header title='Select Ticket'/>
      },
    },
    Monthly: {
      screen: Monthly,
      navigationOptions: {
        header: <Header title='Select Ticket'/>
      },
    },
    OneWay: {
      screen: OneWay,
      navigationOptions: {
        header: <Header title='Select Ticket'/>
      },
    },
    RoundTrip: {
      screen: RoundTrip,
      navigationOptions: {
        header: <Header title='Select Ticket'/>
      },
    },
    Weekly: {
      screen: Weekly,
      navigationOptions: {
        header: <Header title='Select Ticket'/>
      },
    },
    Accept: {
      screen: Accept,
      navigationOptions: {
        header: <Header title='Select Ticket'/>
      },
    },
    PaymentMethod: {
      screen: PaymentMethod,
      navigationOptions: {
        header: <Header title='Select Payment Method'/>
      },
    },
    CardInfo: {
      screen: CardInfo,
      navigationOptions: {
        title: 'Select Payment Method',
        header: <Header title='Select Payment Method'/>
      },
    },
    Wallet: {
      screen: Wallet,
      navigationOptions: {
        title: 'Ticket Wallet',
        header: <Header title='Ticket Wallet'/>
      },
    },
    Access: {
      screen: Access,
      navigationOptions: {
        title: 'Ticket',
        header: <Header title='Ticket'/>
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