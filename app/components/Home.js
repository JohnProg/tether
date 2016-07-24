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

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  handleTetherin() {
    this.setState({
      isLoading: true,
    });
    this.props.navigator.push({
      title: 'Login',
      component: Login,
      passProps: { navigator: this.props.navigator },
    });
    this.setState({
      isLoading: false,
    });
  }

  handleSignup() {
    this.setState({
      isLoading: true,
    });
    this.props.navigator.push({
      title: 'Sign Up',
      component: Signup,
      passProps: { navigator: this.props.navigator },
    });
    this.setState({
      isLoading: false,
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
              <Text style={styles.buttonText}>Tether In</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Home;

