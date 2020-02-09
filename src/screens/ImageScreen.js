import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
    </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 30
    }
});

export default ImageScreen;