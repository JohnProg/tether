import React, { Component } from 'react';
import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles/Signup.style.js');

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text>Tether</Text>
          </View>
          <View style={styles.inputs}>

          </View>
        </View>
      </View>
    );
  }
}

module.exports = Signup;
