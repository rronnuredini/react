import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const TestScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>This is test screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 30,
        color: '#fff'
    }
});
export default TestScreen;