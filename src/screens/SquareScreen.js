import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // State === {red: number, green: number, blue: number}
    // action === {colorTochange: 'red' || 'green' || 'blue', amount: 15 || -15}
    switch (action.coloToChange) {
        case 'red':
            // Never to do: state.red = state.red - 15
            return {...state, red: state.red + action.amount};
        case 'green':
            return {...state, green: state.green + action.amount};
        case 'blue':
            return {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
};

const SquareScreen = () => {   

    const [state, dispath] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return (
        <View>
            <ColorCounter 
            onIncrease={() => dispath({ coloToChange: 'red', amount: COLOR_INCREMENT})} 
            onDecrease={() => dispath({ coloToChange: 'red', amount: -1 * COLOR_INCREMENT})} 
            color="RED"
            />
            <ColorCounter
            onIncrease={() => dispath({ coloToChange: 'blue', amount: COLOR_INCREMENT})}
            onDecrease={() => dispath({ coloToChange: 'blue', amount: -1 * COLOR_INCREMENT})}  
            color="BLUE"
            />
            <ColorCounter
            onIncrease={() => dispath({ coloToChange: 'green', amount: COLOR_INCREMENT})}
            onDecrease={() => dispath({ coloToChange: 'green', amount: -1 * COLOR_INCREMENT})}   
            color="GREEN"
            />
            <View style={{ 
                height: 150, 
                width: 150, 
                backgroundColor: 
                `rgb(${red},${green},${blue})`}}/>
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default SquareScreen;