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
      // navigationOptions: {
      //   header: <Header title='Select Origin Station' navigation={navigation}/>
      // },
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Origin Station' navigation={navigation} backButton='Home'/>
      }),
    },
    Destination: {
      screen: Destination,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Destination Station' navigation={navigation} backButton='Origin'/>
      }),
    },
    TicketType: {
      screen: TicketType,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Ticket Type' navigation={navigation} backButton='Destination'/>
      }),
    },
    TenTrip: {
      screen: TenTrip,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Ticket' navigation={navigation} backButton='TicketType'/>
      }),
    },
    Monthly: {
      screen: Monthly,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Ticket' navigation={navigation} backButton='TicketType'/>
      }),
    },
    OneWay: {
      screen: OneWay,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Ticket' navigation={navigation} backButton='TicketType'/>
      }),
    },
    RoundTrip: {
      screen: RoundTrip,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Ticket' navigation={navigation} backButton='TicketType'/>
      }),
    },
    Weekly: {
      screen: Weekly,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Ticket' navigation={navigation} backButton='TicketType'/>
      }),
    },
    Accept: {
      screen: Accept,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Ticket' navigation={navigation} backButton='TicketType'/>
      }),
    },
    PaymentMethod: {
      screen: PaymentMethod,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Payment Method' navigation={navigation} backButton='Accept'/>
      }),
    },
    CardInfo: {
      screen: CardInfo,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Select Payment Method' navigation={navigation} backButton='PaymentMethod'/>
      }),
    },
    Wallet: {
      screen: Wallet,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Ticket Wallet' navigation={navigation} backButton='CardInfo'/>
      }),
    },
    Access: {
      screen: Access,
      navigationOptions: ({ navigation }) => ({
        header: <Header title='Ticket' navigation={navigation} backButton='Wallet'/>
      }),
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