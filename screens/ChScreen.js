import React from "react";
import { Text, View, StyleSheet } from "react-native";

const firstName = 'Rron';
const lastName = 'Nuredini';
let fullName = firstName + ' ' + lastName;
const birthday = "31.10.2010";

const hobbies = [
    { key: '1', hobby: 'Football' },
    { key: '2', hobby: 'Basketball' },
    { key: '3', hobby: 'Tennis' },
    { key: '4', hobby: 'Swimming' },
    { key: '5', hobby: 'Cycling' },
];

const ChScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>✨ My Info ✨</Text>
            
            <View style={styles.card}>
                <Text style={styles.label}>Name:</Text>
                <Text style={styles.value}>{fullName}</Text>
                <Text style={styles.label}>Birthday:</Text>
                <Text style={styles.value}>{birthday}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>🎯 Hobbies</Text>
                {hobbies.map((item) => (
                    <Text key={item.key} style={styles.listItem}>
                        • {item.hobby}
                    </Text>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f6ff',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    header: {
        color: '#2c3e50',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 25,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#34495e',
        marginTop: 5,
    },
    value: {
        fontSize: 18,
        color: '#2c3e50',
        marginBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2980b9',
        marginBottom: 12,
    },
    listItem: {
        fontSize: 18,
        color: '#555',
        marginBottom: 8,
    },
});

export default ChScreen;