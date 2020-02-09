import React from 'react';
import { Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {

    const greetting = 'Hola!!!';
    const bye = <Text>Nos vemos</Text>

    return <View>
                <Text style={styles.textStyle}>This is a component screen TESTED</Text>
                <Text>{greetting}</Text>
                {bye}
           </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;