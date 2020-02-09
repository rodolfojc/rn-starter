import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Beach" image={require('../../assets/beach.jpg')}/>
            <ImageDetail title="Forest" image={require('../../assets/forest.jpg')}/>
            <ImageDetail title="Mountain" image={require('../../assets/mountain.jpg')}/>        
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 30
    }
});

export default ImageScreen;