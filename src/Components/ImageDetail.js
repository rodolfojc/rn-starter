import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ImageDetail = () => {
    return (
    <View>
        <Text style={style.imageStyle}>Show Images Detail</Text>
    </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 30
    }
});

export default ImageDetail;