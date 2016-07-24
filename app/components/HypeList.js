import React, { Component } from 'react';

import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  ListView,
} from 'react-native';

const Tile = require('./Tile');
const styles = require('../styles/Tile.style.js');

// const styles = require('../styles/HypeList.style.js');


const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

let schedule;

const colors = ['rgb(149, 27, 245)', 'rgb(255, 0, 205)', 'rgb(131, 139, 186)', 'rgb(193, 14, 216)', 'rgb(0, 209, 186)'];

class HypeList extends Component {
  constructor(props){
    super(props);
    this.state = {
      ds: null,
      loaded: false
    }
    this.updateInformation = this.updateInformation.bind(this);
  }
  componentDidMount(){
    this.updateInformation();
  }
  componentWillReceiveProps() { 
   this.setState();
 }
  updateInformation(){
    console.log('update info');
    fetch('http://107.170.231.229:8000/getAllEvents?day=1').then((response) => {
      schedule = JSON.parse(response._bodyInit).events.sort((a, b) =>{
          if (a.hypes > b.hypes) {
              return -1;
            }
            if (a.hypes < b.hypes) {
              return 1;
            }
            // a must be equal to b
            return 0;
      });
      this.setState({ ds: ds.cloneWithRows(schedule) , loaded: true});
    }).then((response) => { this.render()}).done()
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
        <View style={styles.listContainer}>
          <ListView contentContainerStyle={styles.listView} dataSource={this.state.ds}
      renderRow={(rowData) => <Tile name={rowData.name} location={rowData.location} id={rowData.id} hypes={rowData.hypes} color={this.generateColor()} startTime={rowData.start_time} endTime={rowData.end_time} description={rowData.description} updateFn={this.updateInformation}/>} />
      </View>
  		);
    }
  }
}

module.exports = HypeList;