import React, { Component } from 'react';

import {
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight,
  Image,
  ListView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const styles = require('../styles/Tile.style.js');

class Tile extends Component {
  constructor(props){
    super(props);
    this.state = {
    	id: this.props.id,
    	color: this.props.color,
    	name: this.props.name,
    	location: this.props.location,
    	hypes: this.props.hypes,
    	startTime: this.props.startTime,
    	endTime: this.props.endTime,
    	description: this.props.description
    }
    console.log(this.state.id);
    this.upVote = this.upVote.bind(this);
  }
  upVote(){
  	console.log('woot', this.state.id);
    fetch('http://107.170.231.229:8000/hypecount', {
      'method': 'POST',
      'body': JSON.stringify({
        Hypee: this.state.id,
        timestamp: Date.now()
      }), 
      headers: {
   'Accept': 'application/json',
   'Content-Type': 'application/json',
 },
    }).then((response) => {
      	console.log('upvoted!');
      	this.props.updateFn();
    })
  }
  render(){
  	return (
			<View>
			  <View style={styles.container, {backgroundColor: this.state.color}}>
			    <View>
		        <Text style={styles.text}>Act: {this.state.name}</Text>
		        <Text style={styles.text}>Location: {this.state.location}</Text>
		        <Text style={styles.text}>Start Time: {this.state.startTime}</Text>
		        <Text style={styles.text}>End Time: {this.state.endTime}</Text>
		        <Text style={styles.text}>Hype Number: {this.state.hypes}</Text>
		      </View>
		      <View style={styles.container}>
			      <View>
			        <TouchableHighlight onPress={this.upVote}>
			          <Icon name="ios-thumbs-up" style={styles.icon}/>
			        </TouchableHighlight>
			      </View>
			      <Text>    </Text>
			      <View>
			        <TouchableHighlight>
			          <Icon name="ios-chatbubbles" style={styles.icon}/>
			        </TouchableHighlight>
			      </View>
		      </View>
		    </View>
		    <View style={styles.hr}/>
		  </View>
	  )
  }
}

module.exports = Tile;