import React, { Component } from 'react';

import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const Tile = require('./Tile');

class HypeList extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    console.log('woot', this.props);
  }
  render(){
    return(
      <Tile />
		);
  }
}

module.exports = HypeList;