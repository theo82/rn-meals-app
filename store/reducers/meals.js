import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';
import { SET_FILTERS } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducers = (state = initialState, action) => {
        switch(action.type) {
            case TOGGLE_FAVORITE: {
                const existingIndex = state.favoriteMeals.findIndex(
                    meal => meal.id === action.mealId
                );
                if(existingIndex >= 0) {
                    const updatedFavMeals = [...state.favoriteMeals];
                    updatedFavMeals.splice(existingIndex, 1);
                    return { ...state, favoriteMeals: updatedFavMeals };
                } else {
                    const meal = state.meals.find(meal => meal.id === action.mealId);
                    
                    return {...state, favoriteMeals: state.favoriteMeals.concat(meal)};
                }
            }
            case SET_FILTERS:
            const appliedFilters = actions.filters;
            const updatedFilteredMeals = state.meals.filter(meal => {
                if(appliedFilters.gluttenFree && !meal.gluttenFree) {
                    return false;
                }
                if(appliedFilters.lactoseFree && !meal.lactoseFree) {
                    return false;
                }
                if(appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                if(appliedFilters.isVegan && !meal.isVegan) {
                    return false;
                }

                return true;
            });
            return{ ...state, filteredMeals: updatedFilteredMeals}
        
        default: {
            return state;
        }
    }
}

export default mealsReducers;