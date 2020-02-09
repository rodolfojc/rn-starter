import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ColorScreen = (props) => {

    return (
        <View>
            <Button title="Add a Color" />
            <View style={{ height: 100, width: 100, backgroundColor: randomRgb()}}></View>
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);

    return `rgb(${red}, ${blue}, ${green})`;
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default ColorScreen;