import React from 'react';
import {View, FlatList, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import { CATEGORIES, MEALS} from '../data/dummy-data';
import CategoriesScreen from './CategoriesScreen';

const CategoryMealScreen = props => {

    const renderMealItem = (itemData) => {
        return(
        <View><Text>{itemData.item.title}</Text></View>
        )
    }
    const catId = props.navigation.getParam('categoryId');
    const selectCategory = CATEGORIES.find(cat => cat.id ===catId)

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
    return (
        <View style={styles.screen}>
           <FlatList data={displayedMeals} keyExtractor={(item,index)=> item.id} renderItem={renderMealItem} />
        </View>

    )
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
        alignItems: 'center'
    }
})

export default CategoryMealScreen;