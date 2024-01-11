import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

const Headers = () => {
  return (
    <SafeAreaView>
      <Text style={styles.zero}>0</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  zero: {
    fontSize: 30,
    backgroundColor: 'yellow',
  },
});

export default Headers;
