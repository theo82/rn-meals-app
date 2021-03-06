import React from 'react';
import  { useSelector } from 'react-redux';

import { CATEGORIES, MEALS} from '../data/dummy-data';
import { StyleSheet } from 'react-native'
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return <MealList listData={displayedMeals} navigation={props.navigation}/>
};

CategoryMealScreen.navigationOptions = (navigatioData) => {
    const catId = navigatioData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15
    }
})

export default CategoryMealScreen;