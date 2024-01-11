import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import SignUp from './src/screen/SignUp';
import Headers from './src/screen/Headers';
import Product from './src/screen/Product';

const App = () => {
  const products = [
    {
      name: 'Oppo',
      id: '001',
      price: '20000',
    },

    {
      name: 'Vivo',
      id: '002',
      price: '17000',
    },

    {
      name: 'Infinix',
      id: '003',
      price: '13000',
    },
  ];
  return (
    <View>
      <Headers />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
