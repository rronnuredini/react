import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonScreen = () => {

    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Button Screen</Text>

            <Text style={styles.counterText}>
                Counter: {counter}
            </Text>

            {/* BUTTON */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    console.log('Button Clicked');
                    setCounter(counter + 1);
                }}
            >
                <Text style={styles.buttonText}>Click Me</Text>
            </TouchableOpacity>

            {/* TOUCHABLE TEXT */}
            <TouchableOpacity
                style={styles.touchableBox}
                onPress={() => {
                    console.log('Touchable Clicked');
                    setCounter(counter + 1);
                }}
            >
                <Text style={styles.touchText}>
                    Click Touchable Element
                </Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0f172a',
        padding: 20,
    },

    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
    },

    counterText: {
        fontSize: 22,
        color: '#38bdf8',
        marginBottom: 30,
        fontWeight: '600',
    },

    button: {
        backgroundColor: '#2563eb',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 12,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },

    touchableBox: {
        borderWidth: 2,
        borderColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 12,
    },

    touchText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default ButtonScreen;