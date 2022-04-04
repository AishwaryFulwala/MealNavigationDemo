import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryGridTile = (props) => {
    return (
        <TouchableOpacity
            style={{ ...styles.body, backgroundColor: props.color }}
            onPress={props.onSelect}>
            <View >
                <Text style={styles.fontTxt}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
 };

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        margin: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 1,
        elevation: 7,
    },
    fontTxt: {
        fontFamily: 'Raleway-Regular',
        fontSize: 20,
    },
});

export default CategoryGridTile;