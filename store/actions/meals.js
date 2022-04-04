export const TOGGLE_FAV = 'TOGGLE_FAV';
export const SET_FILTERS = 'SET_FILTER';

export const toggleFav = (id) => {
    return {
        type: TOGGLE_FAV,
        mealID: id
    }
};

export const setFilters = (filters) => {
    return {
        type: SET_FILTERS,
        filters: filters
    }
};