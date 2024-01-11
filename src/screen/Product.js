import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {addToCart} from '../Components/Redux/Action';
import {useDispatch} from 'react-redux';

const Headers = props => {
  const item = props.item;

  const dispatch = useDispatch();

  function handleAddToCart(item) {
    dispatch(addToCart(item));
  }
  return (
    <View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.name}>{item.id}</Text>
      <Text style={styles.name}>{item.price}</Text>
      <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    fontSize: 50,
  },
});
export default Headers;
