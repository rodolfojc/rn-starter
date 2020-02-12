import React, { useReducer } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    // state === { count: number }
    // action === { type: 'increment' || 'decrement', payload: 1}

    switch(action.type){
        case 'increment':
            return {...state, count: state.count + action.payload};
        case 'decrement':
            return {...state, count: state.count - action.payload};
        default:
            return;
    }

};

const CounterScreen = (props) => {
    const [state, dispath] = useReducer(reducer, { count: 0 });

    return (
        <View>
            <Button title="Increase" onPress={() => {
                dispath({ type: 'increment', payload: 1});         
            }}/>
            <Button title="Decrease" onPress={() => {
                dispath({ type: 'decrement', payload: 1});  
            }}/>
            <Text style={style.imageStyle}>{state.count}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default CounterScreen;