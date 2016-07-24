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
    // paddingTop: deviceHeight / 10,
    // flexDirection: 'column',
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
  xContainer: {
    width: deviceWidth,
    height: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -deviceHeight / 8,
    // marginBottom: deviceHeight / 30,
  },
  xlogo: {
    width: deviceWidth,
    height: deviceWidth,
  },
  button: {
    // height: deviceHeight / 20,
    // width: deviceWidth / 2,
    // flexDirection: 'row',
    // backgroundColor: '#FF9334',
    // marginBottom: deviceHeight / 80,
    // alignSelf: 'center',
    // justifyContent: 'center',
    // borderRadius: 4,
      height: deviceWidth / 6,
      width: deviceWidth / 2,
      padding: 10,
      // marginRight: deviceWidth / 10,
      marginBottom: deviceWidth / 20,
      borderWidth: 3,
      borderColor: 'white',
      borderRadius: 35,
      alignSelf: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

module.exports = styles;
