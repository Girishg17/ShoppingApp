import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
function Cart() {
  return (
    
    <View style={styles.container}>
        <Navbar cartCount={1}/>
        <Text>Cart</Text>
    </View>
  )
}

export default Cart
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 48,
    },
  });