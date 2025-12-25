import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <Text>ProductList</Text>
      {/*<Link href='/products/1'>Product 1</Link>*/}
      {/* We need the 'relativeToDirectory' keyword because the current file name is index.tsx, otherwise we will not need to keyword.
          Check app/(auth)/login.tsx for the other example
       */}
      <Link href='./1' relativeToDirectory>
        Product 1
      </Link>

      <Link href='/products/2'>Product 2</Link>
      <Link href='/products/3'>Product 3</Link>

      <Link href='/products/best-sellers/playstation-5'>
        PlayStation 5 (Best Sellers)
      </Link>
      <Link href='/products/best-deals/black-friday/playstation-5'>
        PlayStation 5 (Deals)
      </Link>
      <Link href='/products/search/playstation-5'>PlayStation 5 (Search)</Link>
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
