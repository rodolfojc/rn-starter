import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        //alignItems,
        //flexDirection,                   
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //flex: 4                    
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        top: 10,
        bottom: 0,
        left: 0,
        right:0,
        position: 'absolute',
        // ... StyleSheet.absoluteFillObject
        //fontSize: 18
        //alignSelf: 'center',
        //flex: 4            
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        //flex: 2            
    }
});

export default BoxScreen;