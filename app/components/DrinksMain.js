import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

<<<<<<< 1944ee387c776755e5871f8f5573f2817e9c3017
const styles = require('../styles/DrinksMain.style.js');
=======
const styles = require('../styles/Login.style.js');
const HypeList = require('./HypeList');
>>>>>>> Start Implement Upvote Page

class DrinksMain extends Component {

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
            <Text>Drinks</Text>
          </View>
          <View style={styles.inputs}>
            <HypeList />
          </View>
        </View>
      </View>
      </Image>
    );
  }
}

module.exports = DrinksMain;
