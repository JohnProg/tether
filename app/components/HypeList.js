import React, { Component } from 'react';

import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  ListView,
} from 'react-native';

const Tile = require('./Tile');

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

const colors = ['rgb(149, 27, 245)', 'rgb(255, 0, 205)', 'rgb(131, 139, 186)', 'rgb(193, 14, 216)', 'rgb(0, 209, 186)'];

class HypeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      ds: null,
      loaded: false
    }
  }
  componentDidMount(){
    fetch('http://107.170.231.229:8000/getAllEvents').then((response) => {
      const schedule = JSON.parse(response._bodyInit).events;
      this.setState({ ds: ds.cloneWithRows(schedule) , loaded: true});
      console.log(this.state.schedule);
    }).done()
  }
  generateColor(){
    return colors[Math.floor(Math.random() * colors.length)];
  }
  render(){
    if(this.state.loaded === false){
      return(
        <View>
          <Text>Loading</Text>
        </View>
      )
    } else{
      return(
        <ListView dataSource={this.state.ds}
      renderRow={(rowData) => <Tile name={rowData.name} location={rowData.location} hypes={rowData.hypes} color={this.generateColor()}/>} />
  		);
    }
  }
}

module.exports = HypeList;