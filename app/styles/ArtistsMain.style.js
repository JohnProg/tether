import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
  logoContainer: {
    width: deviceWidth,
    height: deviceHeight / 10,
    marginTop: deviceHeight / 60,
    marginBottom: deviceHeight / 30,
  },
  logo: {
    marginTop: deviceHeight / 40,
    marginLeft: deviceWidth / 25,
    width: deviceWidth / 4,
    height: deviceWidth / 12,
  },
});

module.exports = styles;
