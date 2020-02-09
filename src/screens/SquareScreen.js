import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const SquareScreen = (props) => {

    return (
        <View>
            <ColorCounter color="RED"/>
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