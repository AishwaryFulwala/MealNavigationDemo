import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import MealsNavigator from './navigation/MealsNavigator';
import mealsReducer from './store/reducers/meals';

const App = () => {
    const [loadState, setLoadState] = useState(false);
    
    const rootReducer = combineReducers({
        meals: mealsReducer
    })

    const store = createStore(rootReducer);

    useEffect(() => {
        startActivity();
    }, []);

    const startActivity = () => {
        setLoadState(true)
        setTimeout(() => {
        setLoadState(false)
        }, 1000)
    };

    if(!loadState) {
        return (
            <Provider store={store}>
                <MealsNavigator />
            </Provider>
        );
    }

    return (
        <View style={styles.body}>
        <SafeAreaView>
            <ActivityIndicator
            color='#000080'
            size="large"
            animating={loadState}
            />
        </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;