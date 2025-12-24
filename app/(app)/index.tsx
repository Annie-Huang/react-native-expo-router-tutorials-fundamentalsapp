import { Link } from 'expo-router';
import { Text, View, Pressable } from 'react-native';

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

      <Link href='products/best-sellers/playstation' asChild>
        <Pressable>
          <Text>Playstation</Text>
        </Pressable>
      </Link>
    </View>
  );
}
