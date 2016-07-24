import React, { Component } from 'react';
import {
  Text,
  View,
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
      <View>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text>Tether</Text>
          </View>
          <View style={styles.inputs}>
            <TouchableHighlight onPress={this.handleSignup.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.handleTetherin.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Home;

