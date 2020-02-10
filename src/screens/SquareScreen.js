import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = (props) => {

    const [red, setRed] = useState(0);;
    const [blue, setBlue] = useState(0);
    const [green, setGreen] = useState(0);

    const setColor = (color, change) => {
        // color === 'red', 'green or 'blue'
        // change === +15 or -15
    switch (color) {
        case 'red':
            red + change > 255 || red + change < 0 ? null : setRed (red + change);
            return;
        case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen (green + change);
            return;
        case 'blue':
            blue + change > 255 || blue + change < 0 ? null : setBlue (blue + change);
            return;
        default:
            return;
        }
    };

    return (
        <View>
            <ColorCounter 
            onIncrease={() => setColor('red', COLOR_INCREMENT)} 
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} 
            color="RED"
            />
            <ColorCounter
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}  
            color="BLUE"
            />
            <ColorCounter
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}   
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