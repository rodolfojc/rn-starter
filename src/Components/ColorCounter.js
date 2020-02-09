import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease }) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button onPress={onIncrease} title={`Increase ${color}`}/>
            <Button onPress={onDecrease} title={`Decrease ${color}`}/>
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default ColorCounter;