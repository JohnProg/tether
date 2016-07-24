import {
  StyleSheet,
  Dimensions,
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  artistContainer: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
  artistImage: {
    // flex: 1,
    width: deviceWidth,
    height: deviceHeight / 2,
    borderColor: 'black',
    borderWidth: 0.5,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  logoContainer: {
    width: deviceWidth,
    height: deviceHeight / 5.5,
    marginTop: -deviceHeight / 12,
    marginLeft: deviceWidth / 1.55,
    // marginBottom: deviceHeight / 100,
  },
  iconContainer: {
    marginLeft: deviceWidth / 20,
    marginTop: deviceWidth / 20,
  },
  icon: {
    color: 'white',
    fontSize: 40,
  },
  logo: {
    marginTop: deviceHeight / 40,
    marginLeft: deviceWidth / 25,
    width: deviceWidth / 4,
    height: deviceWidth / 12,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  whiteContainer: {
    width: deviceWidth,
    height: deviceWidth * 1.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -deviceHeight / 9,
  },
  whiteDiagonal: {
    width: deviceWidth / 0.9,
    height: deviceHeight / 1.2,
  },
  artistName: {
    // marginTop: deviceHeight / 100,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  artistAlbum: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },
  artistGenre: {
    marginTop: deviceHeight / 6,
    fontSize: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#737475',
    // shadowColor: "#000000",
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 0
    // }
  },
  artistStage: {
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    // shadowColor: "#000000",
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 0
    // }
  },
  artistTime: {
    fontSize: 12,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#737475',
    // shadowColor: "#000000",
    // shadowOpacity: 0.8,
    // shadowRadius: 2,
    // shadowOffset: {
    //   height: 1,
    //   width: 0
    // }
  },
  thirdsContainer: {
    marginTop: deviceHeight / 40,
    marginBottom: deviceHeight / 40,
    height: deviceHeight / 9,
    width: 3 * deviceWidth / 4,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  thirds: {
    width: deviceWidth / 4,
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'black',
    // borderWidth: 0.5,
  },
  thirdsNum: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  thirdsText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#737475',
  },
  trending: {
    fontSize: 25,
    textAlign: 'center',
  },
  comments: {
    textAlign: 'center',
  },
});

module.exports = styles;
