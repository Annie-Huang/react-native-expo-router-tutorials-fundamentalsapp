import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
});
