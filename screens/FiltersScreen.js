import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, Switch, } from 'react-native';
import { useDispatch } from 'react-redux';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import IconsA from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';

import IconsF from 'react-native-vector-icons/Feather';

import CustomHeaderButton from '../components/HeaderButton';
import Color from '../constants/Color';
import { setFilters } from '../store/actions/meals';

const FiltersScreen = (props) => {
    const [isGluten, setIsGluten] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLoctose, setIsLoctose] = useState(false);
    const [filter, setFilter] = useState({
        gluten: isGluten,
        locrose: isLoctose,
        vegan: isVegan,
        vegetarian: isVegetarian,
    });

    const dispatch = useDispatch();

    useEffect(() => {
        setFilter({
            gluten: isGluten,
            locrose: isLoctose,
            vegan: isVegan,
            vegetarian: isVegetarian,
        });
    }, [ isGluten, isLoctose, isVegan, isVegetarian ])

    useEffect(() => {
        props.navigation.setOptions({
            title: 'Filters Meals',
            headerLeft: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title='Menu'
                            iconName='menu-fold'
                            IconComponent={IconsA}
                            onPress={() => {
                                props.navigation.toggleDrawer();
                            }} />
                    </HeaderButtons>
                );
            },
            })
    }, []);

    useEffect(() => {
        dispatch(setFilters(filter));

        props.navigation.setOptions({
            headerRight: () => {
                return (
                    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item
                            title='Save'
                            iconName='download-cloud'
                            IconComponent={IconsF}
                            onPress={() => props.navigation.navigate('Categories')}
                        />
                    </HeaderButtons>
                );
            },
        });
    }, [ filter, dispatch ]);

    const FilterSwitch = (props) => {
        return (
            <View style={styles.filterContainer}>
                <Text>{props.label}</Text>
                <Switch
                    trackColor={{ true: Color.primaryColor1 }}
                    thumbColor={'#fff'}
                    value={props.state}
                    onValueChange={props.onChange}
                />
            </View>
        );
    };

    return (
        <View style={styles.body}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label='Gluten Free'
                state={isGluten}
                onChange={(value) => setIsGluten(value)}
            />
            <FilterSwitch
                label='Vegan'
                state={isVegan}
                onChange={(value) => setIsVegan(value)}
            />
            <FilterSwitch
                label='Vegetarian'
                state={isVegetarian}
                onChange={(value) => setIsVegetarian(value)}
            />
            <FilterSwitch
                label='Loctose Free'
                state={isLoctose}
                onChange={(value) => setIsLoctose(value)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Raleway-Bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '70%',
        margin: 10,
    },
});

export default FiltersScreen;