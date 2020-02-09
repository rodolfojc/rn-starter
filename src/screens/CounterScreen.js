import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

const CounterScreen = (props) => {

    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button title="Increase" onPress={() => {
                // Do not do that
                // counter++;
                setCounter(counter + 1);
            }}/>
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }}/>
            <Text style={style.imageStyle}>{counter}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default CounterScreen;