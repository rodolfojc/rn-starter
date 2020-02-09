import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {

    const greetting = 'Hola!!!';
    const bye = <Text>Nos vemos</Text>;
    const name = 'Rodolfo';

    // Error for return statement when there is a block () or JSX element
    return (
            <View>
                <Text style={styles.textStyle}>Getting started with React Native!</Text>
                <Text style={styles.subHeader}>My name is {name} </Text>                
           </View>
           )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }
});

export default ComponentsScreen;