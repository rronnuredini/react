import React from "react";
import { StyleSheet, Text, View } from "react-native";
const ExerciseScreen = ()=>{
    let message = "hello world";
    return(
        <View>
            <Text style={styles}> {message}</Text>
        </View>

    )
}
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: 'FF0000',
    }
});
export default ExerciseScreen;