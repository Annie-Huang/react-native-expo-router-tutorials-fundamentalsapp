import { Redirect } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = () => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Redirect href='/login' />;
  }

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
