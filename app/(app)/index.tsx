import { Link } from 'expo-router';
import { Text, View, Pressable, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Home page</Text>
      <Link href='/about'>About</Link>
      <Link href='/profile'>Profile</Link>
      <Link href='/profile/abc'>Profile abc</Link>
      <Link href='/products'>Products</Link>
      <Link href='/missing-route'>Missing route</Link>

      {/* asChild is to get the component to pass all its props to its first child component */}
      <Link href='products/best-sellers/playstation' asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Playstation</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0ea5e9',
    padding: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
