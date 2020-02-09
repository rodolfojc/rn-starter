import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = (props) => {
    return (
        <View>
            <Text>Current count: </Text>
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default CounterScreen;