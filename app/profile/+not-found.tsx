import { Link } from 'expo-router';
import React from 'react';

import { StyleSheet, Text, View } from 'react-native';

const CustomNotFound = () => {
  return (
    <View style={styles.container}>
      <Text>Profile page not found</Text>
      <Link href='/'>Go to home</Link>
    </View>
  );
};

export default CustomNotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
