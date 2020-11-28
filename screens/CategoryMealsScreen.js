import React from 'react';
import {View, Button, Text, StyleSheet } from 'react-native';
import { HeaderTitle } from 'react-navigation-stack';
import { CATEGORIES} from '../data/dummy-data';
import CategoriesScreen from './CategoriesScreen';
import Colors from '../constants/Colors';

const CategoryMealScreen = props => {
    const catId = props.navigation.getParam('categoryId');
    const selectCategory = CATEGORIES.find(cat => cat.id ===catId)
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Text>{selectCategory.title}</Text>
            <Button title="Go to Details" onPress={() => {
                props.navigation.navigate({routeName: 'MealDetail'})
            }}></Button>
            <Button title="Go Back" onPress={() => {
                // props.navigation.goBack();
                props.navigation.pop();
            }}></Button>
        </View>

    )
};

CategoryMealScreen.navigationOptions = (navigatioData) => {
    const catId = navigatioData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
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