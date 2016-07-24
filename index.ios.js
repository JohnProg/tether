
// import App from './app/components/App';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

const Home = require('./app/components/Home');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

const tether = () => (
  <NavigatorIOS
    style={styles.container}
    initialRoute={{
      title: 'Home',
      component: Home,
    }}
    navigationBarHidden
  />
);

AppRegistry.registerComponent('tether', () => tether);
