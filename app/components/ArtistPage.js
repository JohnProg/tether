import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
const styles = require('../styles/ArtistPage.style.js');

const artist = {
	image: 'http://berkeleybside.com/wp-content/uploads/2015/07/DSC_9912.jpg',
  name: 'J COLE',
  stage: 'Twin Peaks',
  genre: 'HIP HOP',
  upvotes: 7200,
  events: 1,
  followers: 5890,
  album: 'Resurrected',
  time: 'Friday, 840PM'
}

class ArtistPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navigator: props.navigator,
    };
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.artistContainer}>
	      <Image
	        style={styles.artistImage}
	        source={{uri: artist.image}}
	      >
          <View style={styles.iconContainer}>
            <TouchableHighlight onPress={this.goBack} underlayColor='transparent'>
              <Icon name="ios-arrow-back" style={styles.icon}/>
            </TouchableHighlight>
          </View>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('./../images/0_SIGN_UP/OUTHYPE_LOGO.png')}
            />
          </View>
          <Text style={styles.artistName}>{artist.name}</Text>
          <Text style={styles.artistAlbum}>{artist.album}</Text>
        </Image>
        <View style={styles.whiteContainer}>
          <Image
            style={styles.whiteDiagonal}
            source={require('./../images/1_FILL_INFO/WHITE_SHAPE.png')}
          >
          <Text style={styles.artistGenre}>{artist.genre}</Text>
          <Text style={styles.artistStage}>{artist.stage}</Text>
          <Text style={styles.artistTime}>{artist.time}</Text>
          <View style={styles.thirdsContainer}>
            <View style={styles.thirds}>
              <Text style={styles.thirdsNum}>{artist.upvotes}</Text>
              <Text style={styles.thirdsText}>Upvotes</Text>
            </View>
            <View style={styles.thirds}>
              <Text style={styles.thirdsNum}>{artist.events}</Text>
              <Text style={styles.thirdsText}>Events</Text>
            </View>
            <View style={styles.thirds}>
              <Text style={styles.thirdsNum}>{artist.followers}</Text>
              <Text style={styles.thirdsText}>Followers</Text>
            </View>

          </View>

          <Text style={styles.trending}>
            <Text>TRENDING</Text>
            <Text style={{fontWeight: "bold"}}>COMMENTS</Text>
          </Text>
          <Text style={styles.comments}>#DOPE #OLDSCHOOL #WTF #ILLIN</Text>


          </Image>
        </View> 
      </View>
    );
  }
}

module.exports = ArtistPage;
