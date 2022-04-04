import React from 'react';
import { Text, StyleSheet } from 'react-native';

const DefaultText = (props) => {
    return <Text style={styles.fontItem}>{props.children}</Text>
};

const styles = StyleSheet.create({
    fontItem: {
        fontFamily: 'Raleway-SemiBoldItalic',
        fontSize: 13,
        color: '#ffffff',
    },
});

export default DefaultText;