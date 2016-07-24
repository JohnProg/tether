
import React, { Component } from 'react';

import {
  Text,
  View,
  ListView,
} from 'react-native';

const Tile = require('./Tile');
const styles = require('../styles/Tile.style.js');

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

import Icon from 'react-native-vector-icons/EvilIcons';

let schedule;

const colors = [
  'rgb(149, 27, 245)',
  'rgb(255, 0, 205)',
  'rgb(131, 139, 186)',
  'rgb(193, 14, 216)',
  'rgb(0, 209, 186)',
];
let count = 0;

class HypeListCurrent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ds: null,
      loaded: false,
      navigator: props.navigator,
    };
    this.updateInformation = this.updateInformation.bind(this);
    this.hotReload = this.hotReload.bind(this);
  }

  componentDidMount() {
    this.updateInformation();
  }

  updateInformation() {
    fetch('http://107.170.231.229:8000/getCurrentEvents?day=1').then((response) => {
      schedule = JSON.parse(response._bodyInit).events.sort((a, b) => {
        if (a.hypes > b.hypes) {
          return -1;
        }
        if (a.hypes < b.hypes) {
          return 1;
        }
        // a must be equal to b
        return 0;
      });
      this.setState({ ds: ds.cloneWithRows(schedule), loaded: false });
      setTimeout(() => this.setState({ loaded: true }, 0));
    }).done();
  }

  hotReload() {
    this.updateInformation(); 
  }

  generateColor() {
    if(count === 5){
      count = 0;
    }
    return colors[Math.floor(count++)];
  }
  render() {
    if (this.state.loaded === false) {
      return (
        <View>
        </View>
      );
    }
    return (
      <View style={styles.listContainer}>
        <ListView
          contentContainerStyle={styles.listView}
          dataSource={this.state.ds}
          renderRow={(rowData) =>
            <Tile
              reload={this.hotReload}
              navigator={this.state.navigator}
              name={rowData.name}
              location={rowData.location}
              id={rowData.id}
              hypes={rowData.hypes}
              color={this.generateColor()}
              startTime={rowData.start_time}
              endTime={rowData.end_time}
              description={rowData.description}
              updateFn={this.updateInformation}
            />}
        />
      </View>
		);
  }
  }

module.exports = HypeListCurrent;
