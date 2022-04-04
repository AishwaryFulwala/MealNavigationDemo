import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import DefaultText from './DefaultText';


const MealItem = (props) => {
    return (
        <View style={styles.body}>
            <View style={styles.bodyView}>
                <TouchableOpacity
                    style={{ backgroundColor: props.color }}
                    onPress={props.onSelect}>
                        <ImageBackground source={{ uri: props.img }} style={styles.img}>
                            <View style={styles.item}>
                                <View style={styles.itemView}>
                                    <View>
                                        <Text style={styles.fontHeader}>{props.title}</Text>
                                    </View>
                                    <View style={styles.itemContainer}>
                                        <DefaultText>{props.duration} min</DefaultText>
                                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>     
                                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: { 
        flex: 1,
        justifyContent: 'center',
        height: 200,
        backgroundColor: '#f5d5f3',
        width: '95%',
        margin: 8,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOpacity: 0.60,
        elevation: 10,
    },
    bodyView: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    item: {
        justifyContent: 'flex-end',
        height: '100%',
    },
    fontHeader: {
        fontFamily: 'Raleway-Bold',
        fontSize: 18,
        padding: 10,
        color: '#ffffff',
        fontWeight: '600',
    },
    img: {
        height: '100%',
        width: '100%',
        
    },
    itemView: {
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(36, 35, 35, 0.3)',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingBottom: 5,
    },
});


export default MealItem;