import React, {useEffect} from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux'

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import IconsA from 'react-native-vector-icons/AntDesign';

import IconsE from 'react-native-vector-icons/Entypo';
import IconsF from 'react-native-vector-icons/Fontisto';

import MealList from '../components/MealList';
import CustomHeaderButton from '../components/HeaderButton';

const FavoritesScreen = (props) => {
    useEffect(() => {
        props.navigation.setOptions({
            title: 'Your Favorites',
            headerLeft: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title='Menu'
                            iconName='menu-fold'
                            IconComponent={IconsA}
                            onPress={() => {
                                props.navigation.toggleDrawer();
                            }}
                        />
                    </HeaderButtons>
                );
            },
        })
    }, []);
    
    const favMeal = useSelector((state) => state.meals.favoriteMeals);
    
    if(!favMeal || favMeal.length === 0) {
        return (
            <View style={styles.body}>
                <View style={styles.textView}>
                    <Text style={styles.text}>No Favorite Meals Found....</Text>
                    <IconsE size={22} name='emoji-sad' color='#1c0c30' />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.text}>Start Adding Some!!!...</Text>
                    <IconsF size={22} name='smiley' color='#1c0c30' />
                </View>
            </View>
        );
    }

    return (
        <MealList listData={favMeal} navigation={props.navigation} />
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

export default FavoritesScreen;