'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Dimensions
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
	artistContainer: {
	  flex: 1,
	  width: deviceWidth,
	  height: deviceHeight,
	},
	artistImage: {
	  // flex: 1,
	  width: deviceWidth,
	  height: deviceHeight / 2,
	  borderColor: 'black',
	  borderWidth: 0.5,
	},
	logoContainer: {
	  width: deviceWidth,
	  height: deviceHeight / 5,
	  marginTop: deviceHeight / 60,
	  marginBottom: deviceHeight / 30,
	},
	logo: {
	  marginTop: deviceHeight / 40,
	  marginLeft: deviceWidth / 25,
	  width: deviceWidth / 4,
	  height: deviceWidth / 12,
	},
	whiteContainer: {
	  width: deviceWidth,
	  height: deviceWidth * 1.1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  marginTop: -deviceHeight / 9,
	},
	whiteDiagonal: {
	  width: deviceWidth / 0.9,
	  height: deviceHeight / 1.2,
	},
	artistName: {
	  marginTop: deviceHeight / 4.5,
	  fontSize: 45,
	  fontWeight: 'bold',
	  color: 'white',
	  alignSelf: 'center',
	  justifyContent: 'center',
	  backgroundColor: 'rgba(0,0,0,0)',
	  shadowColor: "#000000",
	  shadowOpacity: 0.8,
	  shadowRadius: 2,
	  shadowOffset: {
	    height: 1,
	    width: 0
	  }
	},
	artistAlbum: {
	  fontSize: 20,
	  // fontWeight: 'bold',
	  color: 'white',
	  alignSelf: 'center',
	  justifyContent: 'center',
	  backgroundColor: 'rgba(0,0,0,0)',
	  shadowColor: "#000000",
	  shadowOpacity: 0.8,
	  shadowRadius: 2,
	  shadowOffset: {
	    height: 1,
	    width: 0
	  }
	},
	artistGenre: {
		marginTop: deviceHeight / 6,
		fontSize: 12,
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#737475',
		// shadowColor: "#000000",
		// shadowOpacity: 0.8,
		// shadowRadius: 2,
		// shadowOffset: {
		//   height: 1,
		//   width: 0
		// }
	},
	artistStage: {
		fontSize: 30,
		fontWeight: 'bold',
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		// shadowColor: "#000000",
		// shadowOpacity: 0.8,
		// shadowRadius: 2,
		// shadowOffset: {
		//   height: 1,
		//   width: 0
		// }
	},
	artistTime: {
		fontSize: 12,
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#737475',
		// shadowColor: "#000000",
		// shadowOpacity: 0.8,
		// shadowRadius: 2,
		// shadowOffset: {
		//   height: 1,
		//   width: 0
		// }
	},
	thirdsContainer: {
	  marginTop: deviceHeight / 40,
	  marginBottom: deviceHeight / 40,
	  height: deviceHeight/9,
	  width: 3 * deviceWidth/4,
	  flexDirection: 'row',
	  alignSelf: 'center',
	},
	thirds: {
	  width: deviceWidth/4,
	  alignItems: 'center',
	  justifyContent: 'center',
	  // borderColor: 'black',
	  // borderWidth: 0.5,
	},
	thirdsNum: {
	  fontSize: 25,
	  color: 'black',
	  fontWeight: 'bold',
	},
	thirdsText: {
	  textAlign: 'center',
	  fontSize: 14,
	  color: '#737475',
	},
	trending: {
		fontSize: 25,
		textAlign: 'center',
	},
	comments: {
		textAlign: 'center',
	}




});

module.exports = styles;