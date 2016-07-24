import React, { Component } from 'react';
import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles/Login.style.js');
const HypeList = require('./HypeList');

class ArtistsMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schedule: null
    };
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text>Artist</Text>
          </View>
          <View style={styles.inputs}>
            <HypeList/>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = ArtistsMain;
