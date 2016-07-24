
// import App from './app/components/App';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

const Home = require('./app/components/Home');
var DeviceInfo = require('react-native-device-info');
console.error("Device Unique ID", DeviceInfo.getUniqueID());
const tether = () => (
  <NavigatorIOS
    style={styles.container}
    initialRoute={{
      title: 'Home',
      component: Home,
    }}
    navigationBarHidden={true}
  />
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('tether', () => tether);
