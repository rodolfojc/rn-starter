import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = (props) => {
    return (
        <View>
            <Image source={props.image}/>
            <Text style={style.imageStyle}>{props.title}</Text>
            <Text style={style.imageStyle}>{props.score}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    imageStyle: {
        fontSize: 25
    }
});

export default ImageDetail;