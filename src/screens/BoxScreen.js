import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewTwoStyle}/>
            <View style={styles.viewThreeStyle}/>
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'                                    
    },
    viewOneStyle: {
        borderWidth: 5,
        borderColor: 'black',
        backgroundColor: 'green',
        height: 100,
        width: 100,                   
    },
    viewTwoStyle: {
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor: 'blue',
        height: 100,
        width: 100,
        top: 100
    },
    viewThreeStyle: {
        borderWidth: 3,
        borderColor: 'black',
        backgroundColor: 'red',
        height: 100,
        width: 100,          
    }
});

export default BoxScreen;