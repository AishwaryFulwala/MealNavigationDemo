import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAV, SET_FILTERS } from '../actions/meals';

const initState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
};

const mealsReducer = (state = initState, action) => {
    switch (action.type) {
        case TOGGLE_FAV:
            const index = state.favoriteMeals.findIndex((meal) => meal.id === action.mealID)

            if (index >= 0) {
                const updatedFav = [...state.favoriteMeals];
                updatedFav.splice(index, 1)
                return {...state, favoriteMeals: updatedFav}
            }else {
                const updatedFav = state.favoriteMeals.concat(state.meals.find((meal) => meal.id === action.mealID))
                return { ...state, favoriteMeals: updatedFav }
            }
   
        case SET_FILTERS:
            const applied = action.filters;
            const filter = state.meals.filter((meal) => {

                if(applied.gluten && !meal.isGlutenFree)
                    return false;

                if (applied.locrose && !meal.isLoctoseFree)
                    return false;

                if (applied.vegan && !meal.isVegan)
                    return false;
                
                if (applied.vegetarian && !meal.isVegetarian) 
                    return false;
                
                return true;
            });
            
            return { ...state, filteredMeals: filter }

        default:
            return state;
    }
};

export default mealsReducer