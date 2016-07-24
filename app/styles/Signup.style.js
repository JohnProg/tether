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
	backgroundImage: {
	  flex: 1,
	  width: deviceWidth,
	  height: deviceHeight,
	},
	logoContainer: {
	  width: deviceWidth,
	  height: deviceHeight / 5,
	  alignItems: 'center',
	  justifyContent: 'center',
	  marginTop: deviceHeight / 60,
	  marginBottom: deviceHeight / 30,
	},
	logo: {
	  width: deviceWidth / 2.5,
	  height: deviceWidth / 7.5,
	},
	paintContainer: {
	  width: deviceWidth,
	  height: deviceWidth,
	  alignItems: 'center',
	  justifyContent: 'center',
	  marginTop: -deviceHeight / 8,
	  // marginBottom: deviceHeight / 30,
	},
	paintSwipe: {
	  width: deviceWidth,
	  height: deviceWidth,
	},
	whiteContainer: {
	  width: deviceWidth,
	  height: deviceWidth * 1.1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  marginTop: -deviceHeight / 2.6,
	},
	whiteDiagonal: {
	  width: deviceWidth / 1.15,
	  height: deviceWidth * 1.1,
	},
	iconContainer: {
	  width: deviceWidth,
	  height: deviceWidth,
	  alignItems: 'center',
	  justifyContent: 'center',
	  marginTop: -deviceHeight / 1.24,
	},
	userIcon: {
	  width: deviceWidth / 3.4,
	  height: deviceWidth / 3.4,
	},
	button: {
	    height: deviceWidth / 8,
	    width: deviceWidth / 2.3,
	    padding: 10,
	    marginBottom: deviceWidth / 20,
	    borderWidth: 3,
	    borderColor: 'white',
	    borderRadius: 35,
	    alignSelf: 'center',
	    backgroundColor: '#929292',
	    marginTop: deviceHeight / 100,
	},
	buttonText: {
	  fontSize: 18,
	  fontWeight: 'bold',
	  color: 'white',
	  alignSelf: 'center',
	  justifyContent: 'center',
	},
	title: {
		marginTop: deviceHeight / 30,
		fontSize: 16,
		color: 'black',
	    textAlign: 'center',
	    width: deviceWidth / 2,
	    alignSelf: 'center',
	},
	subtitle: {
		marginTop: deviceHeight / 80,
		marginBottom: deviceHeight / 40,
		fontSize: 12,
		color: '#929292',
	    textAlign: 'center',
	    width: deviceWidth / 2,
	    alignSelf: 'center',
	},
	inputs: {
	  marginTop: -deviceHeight / 5,
	},
	inputBox: {
		width: deviceWidth / 1.22,
		borderTopColor: '#929292',
        borderTopWidth: 0.5,
        alignSelf: 'center',
	},
	submit: {
	  height: deviceHeight / 30,
	  paddingTop: deviceHeight / 25,
	  paddingBottom: deviceHeight / 25,
	  fontSize: deviceHeight / 47,
	  color: 'white',
	  textAlign: 'center',
	  // borderColor: 'black',
	  // borderWidth: 0.5,
	},
});

module.exports = styles;

