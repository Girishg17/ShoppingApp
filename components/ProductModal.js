import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

const ProductModal = ({ visible, onClose, product={}, onAddToCart }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Image
            source={{ uri: product?.image }}
            style={styles.modalImage}
            resizeMode="contain"
          />
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionLabel}>Description:</Text>
            <Text style={styles.description}>{product?.description}</Text>
          </View>
          <View style={styles.modalActions}>
            <TouchableOpacity
              style={styles.addToCartButton}
              onPress={()=>{onAddToCart()}}
            >
              <MaterialIcons name="shopping-cart" size={30} color="white" />
              <Text style={styles.addToCartText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ProductModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: 150,
    height: 200,
    marginBottom: 20,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  addToCartButton: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginRight: 10,
    marginTop: 10,
    justifyContent:'center'
    
  },
  addToCartText: {
    color: "white",
    fontWeight: "bold",
  },
  closeButton: {
    flex: 1,
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  
  },
  closeButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  descriptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  descriptionLabel: {
    fontWeight: "bold",
  },
  description: {
    flex: 1,
    marginLeft: 4,
  },
});
