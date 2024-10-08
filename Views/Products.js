import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import Navbar from '../components/Navbar'; 
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addToCart } from '../Redux/action'; 
import { FontAwesome } from '@expo/vector-icons'; 
import ProductModal from '../components/ProductModal'; 

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const cartItems = useSelector(state => state.cart); 
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchProducts());
            } catch (error) {
                console.error("Failed to fetch products:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [dispatch]);

    const handleProductPress = (item) => {
        setSelectedProduct(item);
        setIsModalVisible(true);
    };

    const handleAddToCart = (product) => {
        const isProductInCart = cartItems.some(item => item.id === product.id);

        if (isProductInCart) {
            Alert.alert("Product already in cart", "This product is already in your cart.");
        } else {
            dispatch(addToCart(product));
            setIsModalVisible(false);
        }
    };

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
        <TouchableOpacity style={styles.card} onPress={() => handleProductPress(item)}>
            <Image source={{ uri: item.image }} resizeMode="contain" style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <View style={styles.ratingContainer}>
                    {renderStars(item.rating.rate)}
                    <Text style={styles.ratingCount}>({item.rating.count})</Text>
                </View>
                <Text style={styles.price}>Rs. {item.price}</Text>
                <Text style={styles.category}>Category: {item.category}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Navbar cartCount={cartItems?.length} screen={"Product"} title={"Shopping"} />
            {loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                    <Text style={styles.loaderText}>Getting products...</Text>
                </View>
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item?.id?.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                    initialNumToRender={5}
                    maxToRenderPerBatch={5}
                />
            )}
            <ProductModal 
                visible={isModalVisible} 
                onClose={() => setIsModalVisible(false)} 
                product={selectedProduct} 
                onAddToCart={() => handleAddToCart(selectedProduct)} 
            />
        </View>
    );
};

export default Products;

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
        fontWeight: 'bold'
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
    description: {
        fontSize: 12,
        color: '#888',
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderText: {
        marginTop: 10,
        fontSize: 16,
        color: '#888',
    },
});
