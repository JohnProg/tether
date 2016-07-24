import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Dimensions,
  TouchableHighlight
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text>Tether</Text>
          </View>
          <View style={styles.inputs}>

          </View>
        </View>
      </View>
    );
  }
}

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

module.exports = Signup;
