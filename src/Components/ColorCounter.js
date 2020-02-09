import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ color }) => {

    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`}/>
            <Button title={`Decrease ${color}`}/>
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default ColorCounter;