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

const SquareScreen = (props) => {   

    const [state, dispath] = useReducer(reducer, {red: 0, green: 0, blue: 0});

    return (
        <View>
            <ColorCounter 
            onIncrease={() => {} } 
            onDecrease={() => {} } 
            color="RED"
            />
            <ColorCounter
            onIncrease={() => {} }
            onDecrease={() => {} }  
            color="BLUE"
            />
            <ColorCounter
            onIncrease={() => {} }
            onDecrease={() => {} }   
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