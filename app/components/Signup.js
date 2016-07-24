import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  AlertIOS,
} from 'react-native';
/* eslint-disable react/prop-types */
const styles = require('../styles/Signup.style.js');
const TabMain = require('./TabMain.js');

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleGetHyped = this.handleGetHyped.bind(this);
  }

  handleGetHyped() {
    AlertIOS.prompt('Enter your name', null, () =>{
      this.props.navigator.push({
        title: 'Tab Main',
        component: TabMain,
        passProps: { navigator: this.props.navigator },
      });
    });  
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
            <View style={styles.paintContainer}>
              <Image
                style={styles.paintSwipe}
                source={require('./../images/1_FILL_INFO/PAINT_SWIPE.png')}
              />
            </View>
            <View style={styles.whiteContainer}>
              <Image
                style={styles.whiteDiagonal}
                source={require('./../images/1_FILL_INFO/WHITE_SHAPE.png')}
              />
            </View>
            <View style={styles.iconContainer}>
              <Image
                style={styles.userIcon}
                source={require('./../images/1_FILL_INFO/DEFAULT_PIC.png')}
              />
            </View>
            <View style={styles.inputs}>
              <Text style={styles.title}>Free Account</Text>
              <Text style={styles.subtitle}>For everyone and their mothers</Text>
              <TouchableHighlight
                onPress={this.handleGetHyped}
                style={styles.button}
                underlayColor="transparent"
              >
                <Text style={styles.buttonText}>Get Hyped</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Image>
    );
  }
}

module.exports = Signup;
