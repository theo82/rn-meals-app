import React from 'react';
import {View, Text } from 'react-native';

const CategoryMeal = props => {
    return (
        <View>
            <Text style={styles.screen}>The Category Meals Screen!</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems = 'center'
    }
})

export default CategoryMeal;