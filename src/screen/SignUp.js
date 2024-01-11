import {
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from '../Common/Colors';
import Buttons from '../Common/Buttons';

const App = () => {
  const screenWidth = Dimensions.get('screen').width;
  const screenHeight = Dimensions.get('screen').height;
  return (
    <ScrollView>
      <Image
        style={{
          width: screenWidth,
          height: screenHeight,
          position: 'absolute',
        }}
        source={{
          uri: 'https://coolbackgrounds.io/images/backgrounds/white/pure-white-background-85a2a7fd.jpg',
        }}
      />

      <Text style={styles.SignUp}>SIGN UP</Text>
      <Text style={styles.TxtUsername}>Username</Text>
      <View style={styles.ParentTxtInputUsername}>
        <TextInput
          placeholder="Enter Your Username"
          style={styles.txtInputUsername}></TextInput>
      </View>

      <Text style={styles.PswTxt}>Password</Text>

      <View style={styles.ParentTxtInputPassword}>
        <TextInput
          placeholder="Enter Your Password"
          style={styles.txtInputPassword}></TextInput>
      </View>

      <Buttons />
      <View style={styles.ParentTxtOr}>
        <Text style={styles.TxtOr}>OR</Text>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            style={styles.google}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/2807/PNG/512/google_icon_178964.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.apple}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/887/PNG/512/Apple_icon-icons.com_68994.png',
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={styles.facebook}
            source={{
              uri: 'https://cdn.icon-icons.com/icons2/1/PNG/256/social_facebook_fb_75.png',
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  SignUp: {
    fontSize: responsiveFontSize(4),
    textAlign: 'center',
    color: Colors.black,
    marginTop: responsiveHeight(5.5),
  },

  TxtUsername: {
    color: Colors.black,
    fontSize: responsiveFontSize(4),
    fontFamily: 'Cochin',
    alignSelf: 'center',
    marginTop: responsiveHeight(15),
  },

  ParentTxtInputUsername: {
    alignItems: 'center',
  },

  PswTxt: {
    color: Colors.black,
    fontSize: responsiveFontSize(4),
    fontFamily: 'Cochin',
    alignSelf: 'center',
    marginTop: responsiveHeight(10),
  },

  txtInputUsername: {
    backgroundColor: Colors.white,
    width: responsiveWidth(70),
    height: responsiveHeight(6),
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5),
    borderBottomWidth: 3,
  },

  ParentTxtInputPassword: {
    alignItems: 'center',
  },

  txtInputPassword: {
    backgroundColor: Colors.white,
    width: responsiveWidth(70),
    height: responsiveHeight(6),
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    borderBottomWidth: 3,
  },

  ParentTxtOr: {
    alignItems: 'center',
  },

  TxtOr: {
    backgroundColor: Colors.white,
    paddingTop: 7,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 7,
    marginTop: responsiveHeight(4),
    width: responsiveWidth(17),
    borderWidth: 2,
    textAlign: 'center',
  },

  google: {
    width: responsiveWidth(18),
    height: responsiveHeight(9),
    marginTop: responsiveHeight(4),
    marginLeft: responsiveWidth(5),
  },

  apple: {
    width: responsiveWidth(17),
    height: responsiveHeight(9.5),
    marginTop: responsiveHeight(3.5),
    marginLeft: responsiveWidth(17),
  },

  facebook: {
    width: responsiveWidth(17),
    height: responsiveHeight(9),
    marginTop: responsiveHeight(4),
    marginLeft: responsiveWidth(16),
  },
});

export default App;
