import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return <View>
            <Text style={styles.text}>Hello Rodolfo!!!</Text>
            <Button 
              title="Go to Components Demo"
              onPress={() => console.log('Button Press')}
            />
            <TouchableOpacity onPress={() => console.log('List Press')}>
              <Text>Go to List Demo</Text>
              <Text>Go to List Demo</Text>
              <Text>Go to List Demo</Text>
              <Text>Go to List Demo</Text>
              <Text>Go to List Demo</Text>
            </TouchableOpacity>
         </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
