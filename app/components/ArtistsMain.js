import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles/ArtistsMain.style.js');
const HypeList = require('./HypeList');

class ArtistsMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schedule: null,
      navigator: props.navigator,
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
          <View style={styles.inputs}>
            <HypeList navigator={this.state.navigator}/>
          </View>
        </View>
      </View>
      </Image>
    );
  }
}

module.exports = ArtistsMain;
