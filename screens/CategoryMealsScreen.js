import React, { useEffect } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'

import IconsE from 'react-native-vector-icons/Entypo';
import IconsF from 'react-native-vector-icons/Fontisto';

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
    const availableMeals = useSelector((state) => state.meals.filteredMeals);

    const id = props.route.params.cateID;
    const item = CATEGORIES.find(cat => cat.id === id);
    const meal = availableMeals.filter(m => m.CategoryIds.indexOf(id) >= 0 );

    useEffect(() => {
        props.navigation.setOptions({
            title: item.title,
        });
    }, [])

    if (!meal || meal.length === 0) {
        return (
            <View style={styles.body}>
                <View style={styles.textView}>
                    <Text style={styles.text}>No Meals Found....</Text>
                    <IconsE size={22} name='emoji-sad' color='#1c0c30' />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>May Check your Filters!!!...</Text>
                    <IconsF size={22} name='smiley' color='#1c0c30' />
                </View>
            </View>
        );
    }

    return (
        <MealList listData={meal} navigation={props.navigation} />
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Raleway-Italic',
        fontSize: 22,
        paddingVertical: 5,
        textAlign: 'center',
        color: '#1c0c30'
    },
    textView: {
        alignItems: 'center',
        flexDirection: 'row'
    }
})

export default CategoryMealsScreen;