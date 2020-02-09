import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ImageDetail = (props) => {
    return (
    <View>
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