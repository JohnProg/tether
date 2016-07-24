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
  xContainer: {
    width: deviceWidth,
    height: deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -deviceHeight / 8,
    // marginBottom: deviceHeight / 30,
  },
  xlogo: {
    width: deviceWidth,
    height: deviceWidth,
  },
  button: {
    height: deviceWidth / 8,
    width: deviceWidth / 2.3,
    padding: 10,
    marginBottom: deviceWidth / 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 35,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

module.exports = styles;
