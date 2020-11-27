import React from 'react';
import {View, Button, Text, StyleSheet } from 'react-native';

const CategoryMeal = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMeal;