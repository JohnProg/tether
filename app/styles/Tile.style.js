import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    // flexWrap: 'wrap',
    // alignItems: 'flex-start',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // padding: 10,
    width: deviceWidth,
  },
  logoContainer: {
    width: deviceWidth,
    alignItems: 'center',
    marginTop: deviceHeight / 4,
    marginBottom: deviceHeight / 80,
  },
  textContainer: {
    width: deviceWidth / 2,
    padding: deviceWidth / 40,
    // borderColor: 'white',
    // borderWidth: 0.5,
  },
  iconContainer: {
    width: deviceWidth / 6,
    // borderColor: 'white',
    // borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: 'white',
    fontSize: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    color: 'white',
  },
  listContainer: {
    width: deviceWidth / 1.2,
    alignSelf: 'center',
    height: deviceHeight / 1.3,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
});

module.exports = styles;
