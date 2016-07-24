import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles/Home.style.js');
const Signup = require('./Signup');
const Login = require('./Login');

class Home extends Component {

  handleTetherin() {
    this.props.navigator.push({
      title: 'Login',
      component: Login,
      passProps: { navigator: this.props.navigator },
    });
  }

  handleSignup() {
    this.props.navigator.push({
      title: 'Sign Up',
      component: Signup,
      passProps: { navigator: this.props.navigator },
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
            <TouchableHighlight onPress={this.handleSignup.bind(this)} style={styles.button} underlayColor="transparent">
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.handleTetherin.bind(this)} style={styles.button} underlayColor="transparent">
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

