import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

const ProductDetail = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Details about product with id: {id}</Text>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
