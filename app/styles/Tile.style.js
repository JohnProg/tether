'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flexWrap: 'wrap', 
		alignItems: 'flex-start',
		flexDirection:'row', 
		justifyContent: 'space-around',
		padding: 10,
	},
	logoContainer: {
		width: deviceWidth,
		alignItems: 'center',
		marginTop: deviceHeight / 4,
		marginBottom: deviceHeight / 80,
  },
  hr: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 1,
    marginLeft: 0,
    marginRight: 0,
  },
  icon: {
  	color: 'white',
  	fontSize: 40,
  	flexWrap: 'wrap', 
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  text: {
  	color: 'white',
  }
});

module.exports = styles;