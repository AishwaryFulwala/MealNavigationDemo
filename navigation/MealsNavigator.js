import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

import IconsM from 'react-native-vector-icons/MaterialIcons';
import IconsI from 'react-native-vector-icons/Ionicons';

import React from 'react';
import { Platform } from 'react-native';

import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';

import Colors from '../constants/Color';

const option = {
    headerStyle: {
        backgroundColor: Platform.OS === 'ios' ? Colors.primaryColor2 : Colors.primaryColor1,
    },
    headerTitleStyle: {
        fontFamily: "Raleway-LightItalic",
        fontSize: 25
    },
    headerBackTitleStyle: {
        fontFamily: "Raleway-ExtraLight",
        fontSize: 15
    },
    headerTintColor: 'white',
};

const Stack = createNativeStackNavigator();
const MealsNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Categories" component={CategoriesScreen} options={option} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} options={option} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={option} />
        </Stack.Navigator>
    );
}

const FavStack = createNativeStackNavigator();
const FavNavigator = () => {
    return (
        <FavStack.Navigator>
            <Stack.Screen name="Favorites" component={FavoritesScreen} options={option} />
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={option} />
        </FavStack.Navigator>
    );
};

const Tab = Platform.OS === 'ios' ? createBottomTabNavigator() : createMaterialBottomTabNavigator();
const MealTabNavigator = () => {
    return (
            <Tab.Navigator
                activeColor='#ffffff'
                shifting={true}
                screenOptions={({ route }) => ({                    
                    tabBarActiveTintColor: '#ffffff',
                    tabBarActiveBackgroundColor: Platform.OS === 'ios' ? Colors.primaryColor2 : Colors.primaryColor1,
                    tabBarIcon: ({ focused, color }) => {
                        if(route.name === 'Meals') {
                            return <IconsI name={focused ? 'restaurant-sharp' : 'restaurant-outline'} size={20} color={color} />
                        } else {
                            return <IconsM name={focused ? 'favorite' : 'favorite-outline'} size={20} color={color} />
                        }
                    }
                })}
            >
                <Tab.Screen 
                    name="Meals" 
                    component={MealsNavigator} 
                    options={{ 
                        headerShown: false,
                        tabBarColor: Platform.OS === 'ios' ? Colors.primaryColor2 : Colors.primaryColor1,
                    }}
                />
                <Tab.Screen 
                    name="Favorite" 
                    component={FavNavigator}
                    options={{
                        headerShown: false,
                        tabBarColor: Colors.accentColor,
                    }}
                />
            </Tab.Navigator>
        
    );
};

const FilterStack = createNativeStackNavigator();
const FilterNavigator = () => {
    return (
        <FilterStack.Navigator>
            <Stack.Screen name="Filters" component={FiltersScreen} options={option} />
        </FilterStack.Navigator>
    );
};

const MainDrawer = createDrawerNavigator();
const MainNavigator = () => {
    return (
        <NavigationContainer>
            <MainDrawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerActiveTintColor: Colors.accentColor,
                    drawerInactiveTintColor: '#696969',
                    drawerLabelStyle: {
                        fontFamily: 'Raleway-SemiBold',
                        fontSize: 18,                        
                   },
                    drawerStyle: {
                        backgroundColor: '#c6cbef',
                    },
                }}
            >
                <MainDrawer.Screen
                    name='MealFavTab'
                    component={MealTabNavigator} 
                    options={{
                        drawerLabel: 'Meals',
                    }}
                />
                <MainDrawer.Screen
                    name='Filter' 
                    component={FilterNavigator}
                    options={{
                        drawerLabel: 'Filters',
                    }}
                />
            </MainDrawer.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigator;