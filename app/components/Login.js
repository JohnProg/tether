import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles/Login.style.js');

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  handleGetHyped() {

  }

  render() {
    return (
      <Image
        style={styles.backgroundImage}
        source={require('./../images/6_Lineup/BG.png')}
      >
      <View>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('./../images/0_SIGN_UP/OUTHYPE_LOGO.png')}
            />
          </View>         
          <View style={styles.inputs}>
            <TouchableHighlight onPress={this.handleGetHyped.bind(this)} style={styles.button} underlayColor="transparent">
              <Text style={styles.buttonText}>GetHyped</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      </Image>
    );
  }
}

module.exports = Login;
