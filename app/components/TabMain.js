import React, {
  Component,
} from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  NavigatorIOS,
  TabBarIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import ArtistsMain from './ArtistsMain.js'
import FoodMain from './FoodMain.js'
import DrinksMain from './DrinksMain.js'
import ArtistPage from './ArtistPage.js'

var deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;

class TabMain extends Component {  
  constructor(props) {
  	super(props)
  	this.state = {
  		selectedTab: 'artists',
      navigator: props.navigator,
  	}
  }

  componentDidMount() {

  }

  renderArtistsView() {
    return (
      <ArtistsMain
        style={styles.container}
        ref='artistRef'
        navigator={this.props.navigator}/>
    )
  }

  renderFoodView() {
    return (
      <FoodMain
        style={styles.container}
        ref='foodRef'
        navigator={this.props.navigator}/>
    )
  }

  renderDrinksView() {
    return (
      <DrinksMain
        style={styles.container}
        ref='drinksRef'
        navigator={this.props.navigator}/>
    )
  }

  renderTest() {
    return (
      <ArtistPage
        style={styles.container}
        ref='testRef'
        navigator={this.props.navigator}/>
    );
  }

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItem
          title='Artists'
          selected={this.state.selectedTab === 'artists'}
          iconName={'home'}
          iconSize={25}
          onPress={() => {
              this.setState({
                selectedTab: 'artists'
              });
          }}>
          {this.renderArtistsView()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Food"
          selected={this.state.selectedTab === 'food'}
          iconName={'camera'}
          iconSize={20}
          onPress={() => {
              this.setState({
                selectedTab: 'food'
              });
          }}>
          {this.renderFoodView()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Drinks"
          selected={this.state.selectedTab === 'drinks'}
          iconName={'map'}
          iconSize={20}
          onPress={() => {
              this.setState({
                selectedTab: 'drinks'
              });
          }}>
          {this.renderDrinksView()}
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="Profile"
          selected={this.state.selectedTab === 'profile'}
          iconName={'map'}
          iconSize={20}
          onPress={() => {
              this.setState({
                selectedTab: 'profile'
              });
          }}>
          {this.renderTest()}
        </Icon.TabBarItem>
      </TabBarIOS>
      )
  }

}

var styles = StyleSheet.create({
	container: {
		height: deviceHeight,
		width: deviceWidth
	}
});

module.exports = TabMain;
