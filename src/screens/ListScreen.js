import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        {name: 'Friend 1', age: 43},
        {name: 'Friend 2', age: 22},
        {name: 'Friend 3', age: 15},
        {name: 'Friend 4', age: 17},
        {name: 'Friend 5', age: 33},
        {name: 'Friend 6', age: 32},
        {name: 'Friend 7', age: 25},
        {name: 'Friend 8', age: 27},
        {name: 'Friend 9', age: 16},

    ];
    return (
        <FlatList
            //horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name} 
            data={friends}
            renderItem={({ item }) => {
                return <Text style={style.textStyle}>{item.name} - Age {item.age}</Text>
            }}
        />
    );
       
};

const style = StyleSheet.create({
    textStyle: {
        marginVertical: 50
        
    }
});

export default ListScreen;