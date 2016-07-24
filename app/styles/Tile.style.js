'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const colors = ['rgb(149, 27, 245)', 'rgb(255, 0, 205)', 'rgb(131, 139, 186)', 'rgb(193, 14, 216)', 'rgb(0, 209, 186)'];

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors[Math.floor(Math.random() * colors.length)],
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