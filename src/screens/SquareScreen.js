import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const SquareScreen = (props) => {

    const [red, setRed] = useState(0);;
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    return (
        <View>
            <ColorCounter 
            onIncrease={() => setRed(red + 1)} 
            onDecrease={() => setRed(red - 1)} 
            color="RED"
            />
            <ColorCounter color="BLUE"/>
            <ColorCounter color="GREEN"/>
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default SquareScreen;