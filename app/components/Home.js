import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

const styles = require('../styles/Home.style.js');
const Signup = require('./Signup.js');
const TabMain = require('./TabMain.js');
const ArtistsMain = require('./ArtistsMain.js');
const DeviceInfo = require('react-native-device-info');

/* eslint-disable react/prop-types */

class Home extends Component {

  constructor(props) {
    super(props);
    this.handleTetherin = this.handleTetherin.bind(this);
  }

  handleTetherin() {
    fetch(`http://107.170.231.229:8000/validation?deviceId=${DeviceInfo.getUniqueID()}`)
      .then(response => response.json())
        .then(responseData => {
          if (responseData.userInfo && responseData.userInfo.newUser === false) {
            this.props.navigator.push({
              title: 'Artists Main',
              component: ArtistsMain,
              passProps: { navigator: this.props.navigator },
            });
          } else {
            this.props.navigator.push({
              title: 'Login',
              component: Signup,
              passProps: { navigator: this.props.navigator },
            });
          }
        });
  }

  render() {
    return (
      <Image
        style={styles.backgroundImage}
        source={require('./../images/0_SIGN_UP/background.png')}
      >
        <View>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('./../images/0_SIGN_UP/OUTHYPE_LOGO.png')}
              />
            </View>
            <View style={styles.xContainer}>
              <Image
                style={styles.xlogo}
                source={require('./../images/0_SIGN_UP/BIG_X_IMAGERY.png')}
              />
            </View>
            <View style={styles.inputs}>
              <TouchableHighlight
                onPress={this.handleTetherin}
                style={styles.button}
                underlayColor="transparent"
              >
                <Text style={styles.buttonText}>Tune In</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Image>
    );
  }
}

module.exports = Home;

