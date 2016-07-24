import React, { Component } from 'react';

import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const Tile = require('./Tile');

class HypeList extends Component {
  
	render(){
		return (
      <View>
        <Text>HypeList</Text>
        <ul>
           <Tile />
        </ul>
      </View>
		);
	}
}

module.exports = HypeList;