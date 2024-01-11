import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Colors from './Colors';

const Button = ({extStyleParent, extStyleChild, text}) => {
  return (
    <View style={styles.ViewOfSubmit}>
      <TouchableOpacity style={[styles.ParentTxtSubmit, extStyleParent]}>
        <Text style={[styles.TxtSubmit, extStyleChild]}>
          {text || 'SIGN UP'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ViewOfSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  ParentTxtSubmit: {
    backgroundColor: Colors.black,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    marginTop: responsiveHeight(1),
    marginBottom: responsiveHeight(5),
    width: responsiveWidth(65),
    borderWidth: 2,
    borderRadius: 30,
  },

  TxtSubmit: {
    textAlign: 'center',
    color: Colors.white,
    fontWeight: 'bold',
  },
});

export default Button;
