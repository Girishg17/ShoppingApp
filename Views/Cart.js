import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import Navbar from '../components/Navbar';
import { FontAwesome } from '@expo/vector-icons'; 
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../Redux/action';

function Cart() {
    const cartItems = useSelector(state => state.cart);
    const dispatch = useDispatch();

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

    const handleIncrement = (item) => {
        dispatch(incrementQuantity(item));
    };

    const handleDecrement = (item) => {
        dispatch(decrementQuantity(item));
    };

    const handleRemove = (item) => {
        dispatch(removeFromCart(item));
    };

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} resizeMode="contain" style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.ratingContainer}>
                    {renderStars(item.rating.rate)}
                    <Text style={styles.ratingCount}>({item.rating.count})</Text>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>Rs. {item.price * item.quantity}</Text>
                    <View style={styles.quantityWrapper}>
                        <TouchableOpacity onPress={() => handleDecrement(item)} style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>-</Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <TouchableOpacity onPress={() => handleIncrement(item)} style={styles.quantityButton}>
                            <Text style={styles.quantityButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.category}>Category: {item.category}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Navbar screen={"Cart"} title={"Cart"} />
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item?.id?.toString()}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    );
}

export default Cart;

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
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        justifyContent: 'space-between',
    },
    price: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
    },
    quantityWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#888',
        borderRadius: 4,
        backgroundColor: '#f8f8f8',
        overflow: 'hidden',
    },
    quantityButton: {
        borderWidth: 0,
        borderColor: 'white',
        borderRadius: 2,
        paddingHorizontal: 12,
        paddingVertical: 6,
        
    },
    quantityButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantityText: {
        fontSize: 18,
        paddingHorizontal: 16,
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
