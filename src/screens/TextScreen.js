import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    
    const [name, setName] = useState('');

    return(
        <View>
            <Text>Please, enter your password</Text>
            <TextInput 
                style={style.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={newValue => setName(newValue)}               
            />
            { name.length > 5 ? <Text>Password correct</Text> : <Text>It must be greater than 5 digits</Text> }
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