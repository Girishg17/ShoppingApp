import React from 'react'
import { View, Text, StyleSheet,FlatList,TouchableOpacity ,Image} from 'react-native';
import Navbar from '../components/Navbar';
import { FontAwesome } from '@expo/vector-icons'; 
import { useSelector } from 'react-redux';
function Cart() {
  const cartItems = useSelector(state => state.cart);
  const renderStars = (rating) => {
   
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <FontAwesome 
                key={i} 
                name={i <= rating ? 'star' : 'star-o'} 
                size={20} 
                color="gold" 
            />
        );
    }
    return stars;
};

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card} >
            <Image source={{ uri: item.image }} resizeMode="contain" style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.ratingContainer}>
                    {renderStars(item.rating.rate)}
                    <Text style={styles.ratingCount}>({item.rating.count})</Text>
                </View>
                <Text style={styles.price}>Rs.{" "}{item.price}</Text>
                <Text style={styles.category}>Category:{" "}{item.category}</Text>
            </View>
        </TouchableOpacity>
    );
  return (
    
    <View style={styles.container}>
        <Navbar screen={"Cart"}  title={"Cart"}/>
        <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
    </View>
  )
}

export default Cart
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 48,
    },
    listContainer: {
      paddingHorizontal: 16,
  },
    card: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginVertical: 8,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
      borderColor: 'black'
  },
  image: {
      width: 80,
      height: 100,
      borderRadius: 8,
      marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
},
title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
},
price: {
    fontSize: 16,
    color: 'black',
    marginBottom: 4,
    fontWeight:'bold'
},
category: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
},
ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
},
ratingCount: {
    marginLeft: 8,
    fontSize: 14,
    color: '#888',
},
  });