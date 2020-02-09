import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
                title="Beach" 
                image={require('../../assets/beach.jpg')}
                score="Image Score - 9"/>
            <ImageDetail 
                title="Forest" 
                image={require('../../assets/forest.jpg')}
                score="Image Score - 7"/>
            <ImageDetail 
                title="Mountain" 
                image={require('../../assets/mountain.jpg')}
                score="Image Score - 4"/>        
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 30
    }
});

export default ImageScreen;