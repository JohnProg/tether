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
  button: {
    height: deviceHeight / 20,
    width: deviceWidth / 2,
    flexDirection: 'row',
    backgroundColor: '#FF9334',
    marginBottom: deviceHeight / 80,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
});

module.exports = styles;
