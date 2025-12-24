import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Expo App</Text>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footerText}>© Codevolution</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'red',
    padding: 20,
  },
  headerText: {
    color: 'white',
  },
  footer: {
    backgroundColor: 'blue',
    padding: 20,
  },
  footerText: {
    color: 'white',
  },
});
