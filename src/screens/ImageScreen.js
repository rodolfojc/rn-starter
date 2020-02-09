import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (
    <View>
        <ImageDetail title="Beach"/>
        <ImageDetail title="Forest"/>
        <ImageDetail title="Mountain"/>        
    </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 30
    }
});

export default ImageScreen;