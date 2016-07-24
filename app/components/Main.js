import React, { Component } from 'react';
import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const HypeList = require('./Main');
const styles = require('../styles/Home.style.js');

class Main extends Component {
	constructor(props){
		super(props);

		this.state = {

		}
	}

	render(){
		return(
      <View>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text>Main</Text>
          </View>
          <View style={styles.inputs}>
          </View>
        </View>
      </View>
		);
	}
}

module.exports = Main;