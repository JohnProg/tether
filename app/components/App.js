import React, {Component} from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import { Navigation } from 'react-native-navigation';
const Home = require('./screens/Home');
Navigation.registerComponent('HomeScreen', () => Home);

// screen related book keeping
// import { registerScreens } from './screens';
// registerScreens();

// this will start our app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'HomeScreen', // unique ID registered with Navigation.registerScreen
    title: 'Home', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
  drawer: { // optional, add this if you want a side menu drawer in your app
    left: { // optional, define if you want a drawer from the left
      screen: 'example.FirstSideMenu' // unique ID registered with Navigation.registerScreen
    },
    right: { // optional, define if you want a drawer from the right
      screen: 'example.SecondSideMenu' // unique ID registered with Navigation.registerScreen
    },
    disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
  },
  passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
  animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});



