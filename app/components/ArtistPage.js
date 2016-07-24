import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

const styles = require('../styles/ArtistPage.style.js');

const artist = {
	image: 'http://img.ulximg.com/image/300x300/artist/1392672262_cf16d585b9ffb2dda04554e21f237f49.jpg/6471d751ee61d1f3c953d9431bd395ec/1392672262_j_cole_featuring_jhene_aiko_sparks_will_fly_19.jpg'
}

class ArtistPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <View style={styles.artistContainer}>
	      <Image
	        style={styles.artistImage}
	        source={{ uri: artist.image }}
	      />
      </View>
    );
  }
}

module.exports = ArtistPage;
