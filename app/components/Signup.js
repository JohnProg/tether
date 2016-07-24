import React, { Component } from 'react';
import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles/Signup.style.js');
const TabMain = require('./TabMain.js');

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  handleCreateAccount() {
    this.props.navigator.push({
      title: 'Tab Main',
      component: TabMain,
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
            <TouchableHighlight onPress={this.handleCreateAccount.bind(this)} style={styles.button}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Signup;
