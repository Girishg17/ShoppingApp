import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native'; 

function Navbar({ cartCount }) {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping</Text>
      <TouchableOpacity 
        style={styles.cartButton} 
        onPress={() => navigation.navigate('Cart')}
      >
        <MaterialIcons name="shopping-cart" size={30} color="black" />
        {cartCount > 0 && (
          <View style={styles.cartCountContainer}>
            <Text style={styles.cartCount}>{cartCount}</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

export default Navbar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2CCBE4',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cartButton: {
    position: 'absolute',
    right: 15,
  },
  cartCountContainer: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartCount: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
