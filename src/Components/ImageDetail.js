import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return (
    <View>
        <Image source={require('../../assets/beach.jpg')}/>
        <Text style={style.imageStyle}>{props.title}</Text>
    </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 30
    }
});

export default ImageDetail;