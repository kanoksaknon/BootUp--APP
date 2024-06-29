import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import runData from '../FileJson/yo.json';
import fruitData from '../FileJson/fruit.json';
import otherData from '../FileJson/salad.json';
import plant from '../FileJson/plant.json';
import vitamin from '../FileJson/vitamin.json';
import vet from '../FileJson/vet.json';

const FoodPage = () => {
    const navigation = useNavigation();

    const [selectedFood, setSelectedFood] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (food) => {
        setSelectedFood(food);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const FoodCard = ({ food }) => (
        <TouchableOpacity onPress={() => openModal(food)}>
            <View style={styles.card}>
                <Image source={{ uri: food.picture }} style={styles.cardImage} />
                <Text style={styles.cardTitle}>{food.topic}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <ScrollView>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image style={styles.backIcon} source={require('../trend/arrow.png')} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>
            </View>
            <FoodCard food={runData} />
            <FoodCard food={fruitData} />
            <FoodCard food={otherData} />
            <FoodCard food={plant} />
            <FoodCard food={vitamin} />
            <FoodCard food={vet} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        {selectedFood && (
                            <>
                                <Image source={{ uri: selectedFood.picture }} style={styles.modalImage} />
                                <Text style={styles.modalTitle}>{selectedFood.topic}</Text>
                                <Text style={styles.modalContentText}>{selectedFood.content}</Text>
                                <Pressable onPress={closeModal}>
                                    <Text style={styles.closeButton}>Close</Text>
                                </Pressable>
                            </>
                        )}
                    </View>
                </View>
            </Modal>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    card: {
        borderBlockColor:'#11B3CF',
        backgroundColor: '#c2ebea',
        padding: 10,
        margin: 10,
        borderRadius: 8,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
    },
    modalContentText: {
        fontSize: 16,
        marginBottom: 10,
    },
    
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 24,
    height: 24,
    marginRight: 6,
  },
  backText: {
    fontFamily: 'Mitr',
    fontSize: 16,
    fontWeight: '400',
    color: '#11B3CF',
  },
    closeButton: {
        fontSize: 18,
        color: '#11B3CF',
        textAlign: 'center',
        marginTop: 10,
    },
});

export default FoodPage;