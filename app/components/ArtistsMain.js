import React, { Component } from 'react';
import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles/Login.style.js');
const HypeList = require('./HypeList');

class ArtistsMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schedule: null
    };
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    fetch('http://107.170.231.229:8000/getAllEvents').then((response) => {
      // console.log(JSON.parse(response._bodyInit).events);
      const schedule = JSON.parse(response._bodyInit).events;
      // this.setState({schedule});
      // console.log(this.state.schedule);
    }).done()
  }

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Text>Artist</Text>
          </View>
          <View style={styles.inputs}>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = ArtistsMain;
