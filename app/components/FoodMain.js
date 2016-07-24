import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles/FoodMain.style.js');

class FoodMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <Image
        style={styles.backgroundImage}
        source={require('./../images/5_NEARBY_CONCERTS/BG.png')}
      >
      <View>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('./../images/0_SIGN_UP/OUTHYPE_LOGO.png')}
            />
          </View>
        </View>
      </View>
      </Image>
    );
  }
}

module.exports = FoodMain;
