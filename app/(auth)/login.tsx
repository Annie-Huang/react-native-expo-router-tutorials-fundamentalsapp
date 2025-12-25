import { Link, router } from 'expo-router';
import React from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>

      {/* Check the other example in app/products/index.tsx where we need to add the 'relativeToDirectory' keyword */}
      <Link href='./register'>Create account</Link>

      <Button title='Login' onPress={() => router.push('/profile')} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
