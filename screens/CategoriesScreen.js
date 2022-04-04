import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { CommonActions } from '@react-navigation/native'

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import IconsA from 'react-native-vector-icons/AntDesign';
import 'react-native-gesture-handler';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import CustomHeaderButton from '../components/HeaderButton';

const CategoriesScreen = (props) => {
    useEffect(() => {
        props.navigation.setOptions({
            title: 'Meal Categories ',
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
        });
    }, [])   

    const renderData = (data) => {
        return <CategoryGridTile 
                    title={data.item.title}
                    color={data.item.color}
                    onSelect={() => {
                        props.navigation.dispatch(
                            CommonActions.navigate({
                                name: 'CategoryMeals',
                                params: {
                                    cateID: data.item.id
                                }
                            })
                        )
                    }
                }/>
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderData}
            numColumns={2}
        />
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        margin: 5
    },
    fontTxt: {
        fontFamily: 'Raleway-Regular',
        fontSize: 18,
    },
});

export default CategoriesScreen;