import React, { Component } from 'react';

import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const styles = require('../styles/Tile.style.js');

const Tile = (props) => (
	<View>
	  <View style={styles.container, {backgroundColor: props.color}}>
	    <View>
        <Text style={styles.text}>Act: {props.name}</Text>
        <Text style={styles.text}>Location: {props.location}</Text>
        <Text style={styles.text}>Hype Number: {props.hypes}</Text>
      </View>
      <View style={styles.container}>
	      <View>
	        <TouchableHighlight>
	          <Icon name="ios-thumbs-up" style={styles.icon}/>
	        </TouchableHighlight>
	      </View>
	      <Text>    </Text>
	      <View>
	        <TouchableHighlight>
	          <Icon name="ios-chatbubbles" style={styles.icon}/>
	        </TouchableHighlight>
	      </View>
      </View>
    </View>

    <View style={styles.hr}/>
  </View>
)

module.exports = Tile;