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
    height: deviceHeight / 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: deviceHeight / 60,
    marginBottom: deviceHeight / 30,
  },
  logo: {
    width: deviceWidth / 2.5,
    height: deviceWidth / 7.5,
  },
});


module.exports = styles;
