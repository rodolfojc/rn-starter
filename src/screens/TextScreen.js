import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    return(
        <View>
            <TextInput 
                style={style.input}
                autoCapitalize="none"
                autoCorrect={false}                
                />
        </View>
    );
};

const style = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;