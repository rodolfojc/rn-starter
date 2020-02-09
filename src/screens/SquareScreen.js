import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = (props) => {

    const [red, setRed] = useState(0);;
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    return (
        <View>
            <ColorCounter 
            onIncrease={() => setRed(red + COLOR_INCREMENT)} 
            onDecrease={() => setRed(red - COLOR_INCREMENT)} 
            color="RED"
            />
            <ColorCounter
            onIncrease={() => setBlue(blue + COLOR_INCREMENT)} 
            onDecrease={() => setBlue(blue - COLOR_INCREMENT)}  
            color="BLUE"
            />
            <ColorCounter
            onIncrease={() => setGreen(green + COLOR_INCREMENT)} 
            onDecrease={() => setGreen(green - COLOR_INCREMENT)}   
            color="GREEN"
            />
            <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default SquareScreen;