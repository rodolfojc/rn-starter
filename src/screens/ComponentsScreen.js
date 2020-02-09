import React from 'react';
import { Text, StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>This is a component screen TESTED</Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 25
    }
});

export default ComponentsScreen;