import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

                    // PROPS destructuring
const HomeScreen = ({ navigation }) => {

  return (
         <View>
            <Text style={styles.text}>Hello Rodolfo!!!</Text>
            <Button 
              title="Go to Components Demo"
              onPress={() => navigation.navigate('Components')}
            />
            <Button 
              title="Go to List Dem"
              onPress={() => navigation.navigate('List')}
            />            
         </View>
         );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
