import React, { useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'

import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import IconsM from 'react-native-vector-icons/MaterialIcons';
import 'react-native-gesture-handler';

import IconF from 'react-native-vector-icons/FontAwesome5'

import CustomHeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFav } from '../store/actions/meals'

const MealDetailScreen = (props) => {
    const availableMeals = useSelector((state) => state.meals.meals);
    
    const id = props.route.params.mealID;
    const item = availableMeals.find(meal => meal.id === id);

    const FavMeals = useSelector((state) => state.meals.favoriteMeals.some(meal => meal.id === id));

    const dispatch = useDispatch();

    const toggleFavHandler = useCallback(() => {
        dispatch(toggleFav(id));
    }, [ dispatch, id ]);

    useEffect(() => {
        props.navigation.setOptions({
            title: item.title,
            headerTitleStyle: {
                fontFamily: "Raleway-LightItalic",
                fontSize: 20
            },
            
        });
    }, []);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title='Favorite'
                            iconName={FavMeals ? 'favorite' : 'favorite-outline'}
                            IconComponent={IconsM}
                            onPress={
                                toggleFavHandler
                            }
                        />
                    </HeaderButtons>
                );
            }
        });
    }, [FavMeals]);

    const ListItem = (props) => {
        return (
            <View style={styles.itemView}>
                <IconF name='dot-circle' size={15} color='#3f2f5e' />
                <Text style={styles.item} key={props.children}>{props.children}</Text>
            </View>
        );
    };

    return (
        <ScrollView>
            <Image style={styles.image} source={{uri: item.imageUrl}} />
            <View style={styles.details}>
                <DefaultText>{item.duration} min</DefaultText>
                <DefaultText>{item.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{item.affordability.toUpperCase()}</DefaultText>
            </View>
            <View style={styles.titleView}>
                <Text style={styles.title}>Ingredients</Text>
                {item.ingredients.map((i) => <ListItem key={i}>{i}</ListItem> )}
            </View>
            <View style={styles.titleView}>
                <Text style={styles.title}>Steps</Text>
                {item.steps.map((s) => <ListItem key={s}>{s}</ListItem> )}
            </View>            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 250,
        width: "100%",
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-between',
        backgroundColor: 'rgb(62, 60, 66)',
    },
    titleView: {
        borderTopColor: '#3f2f5e',
        borderTopWidth: 1,
        borderBottomColor: '#3f2f5e',
        borderBottomWidth: 1
    },
    title: {
        fontFamily: 'Raleway-regular',
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
    itemView: {
        flexDirection: 'row',
        width: "100%",
        alignItems: 'center'
    },
    item: {
        margin: 10,

    },
});

export default MealDetailScreen;