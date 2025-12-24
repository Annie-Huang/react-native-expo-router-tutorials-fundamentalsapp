import { SafeAreaView, View, Text } from 'react-native';
import { Slot } from 'expo-router';

export default function RootLayout() {
  return (
    <SafeAreaView>
      <View>
        <Text>My Expo App</Text>
      </View>
      <Slot />
      <View>
        <Text>© Codevolution</Text>
      </View>
    </SafeAreaView>
  );
}
