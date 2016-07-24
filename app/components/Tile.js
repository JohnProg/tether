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
const ArtistPage = require('./ArtistPage.js');

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
    	description: this.props.description,
      navigator: props.navigator,
    }
    console.log(this.state.id);
    this.upVote = this.upVote.bind(this);
    this.goToArtistPage = this.goToArtistPage.bind(this);
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
  
  goToArtistPage() {

    this.props.navigator.push({
      title: 'Artist',
      component: ArtistPage,
      passProps: { navigator: this.props.navigator },
    });

  }

  render(){
  	return (
			<View>
			  <View style={styles.container, {backgroundColor: this.state.color}}>
			    <View style={styles.textContainer}>
		        <Text style={styles.title}>{this.state.name}</Text>
		        <Text style={styles.subtitle}>{this.state.location} | {this.state.startTime} | {this.state.hypes} Hypes</Text>
		      </View>
		      <View style={styles.iconContainer}>
		        <TouchableHighlight onPress={this.upVote} underlayColor='transparent'>
		          <Icon name="ios-thumbs-up" style={styles.icon}/>
		        </TouchableHighlight>
		      </View>
		      <View style={styles.iconContainer}>
		        <TouchableHighlight onPress={this.goToArtistPage} underlayColor='transparent'>
		          <Icon name="ios-help-circle" style={styles.icon}/>
		        </TouchableHighlight>
		      </View>
		    </View>
		    <View style={styles.hr}/>
		  </View>
	  )
  }
}

module.exports = Tile;