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
		 
	},
	logoContainer: {
		width: deviceWidth,
		alignItems: 'center',
		marginTop: deviceHeight / 4,
		marginBottom: deviceHeight / 80,
  },
});

module.exports = styles;

