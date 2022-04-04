import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import MealItem from './MealItem';

const MealList = (props) => {
    const renderData = (data) => {
        return (
            <MealItem
                title={data.item.title}
                duration={data.item.duration}
                complexity={data.item.complexity}
                affordability={data.item.affordability}
                img={data.item.imageUrl}
                onSelect={() => {
                    props.navigation.dispatch(
                        CommonActions.navigate({
                            name: 'MealDetail',
                            params: {
                                mealID: data.item.id
                            }
                        })
                    )
                }}
            />
        );
    }

    return (
        <View style={styles.body}>
            <FlatList
                data={props.listData}
                renderItem={renderData}
                style={{ width: '100%' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default MealList;