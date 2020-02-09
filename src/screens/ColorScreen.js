import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ColorScreen = (props) => {

    return (
        <View>
            <Button title="Add a Color" />
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default ColorScreen;