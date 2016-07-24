import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

import Chart from 'react-native-chart';

/* eslint-disable react/prop-types */
const styles = require('../styles/SimpleChart.style.js');

class SimpleChart extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      hypee_id: 1,
      loaded: false,
    }
  }
  componentWillMount(){
    const query = `http://107.170.231.229:8000/getHypeTimeline?Hypee=${this.state.hypee_id}`;
    let data;
    fetch(query,{
      'method': 'GET',
    }).then((response) =>{
      console.log(response);
      data = response.data.map((value, i) =>{
        if(value === undefined){
          value = 0;
        }
        return [i, value];
      }).slice(-30);
      console.log('data is:', data);
      this.setState({data})
    })
  }
  render() {
    if(!this.state.loaded){
      return(
        <View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Chart
            style={styles.chart}
            data={this.state.data}
            verticalGridStep={30}
            type="line"
           />
        </View>
      ); 
    }
  }
}

module.exports = SimpleChart;
