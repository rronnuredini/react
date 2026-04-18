import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const cars = [
    { name: 'Golf', lastname: '7', age: '2016' },
    { name: 'BMW', lastname: '320i', age: '2026' },
    { name: 'Mercedes', lastname: 'C-Class', age: '2020' },
    { name: 'Audi', lastname: 'A4', age: '2022' },
    { name: 'Tesla', lastname: 'Model 3', age: '2024' },
    { name: 'Porsche', lastname: '911 Carrera', age: '2023' },
    { name: 'Honda', lastname: 'Civic Type R', age: '2021' },
    { name: 'Toyota', lastname: 'Corolla', age: '2025' },
    { name: 'Ford', lastname: 'Mustang GT', age: '2019' },
    { name: 'Hyundai', lastname: 'Ioniq 5', age: '2022' },
    { name: 'Mazda', lastname: 'MX-5 Miata', age: '2023' },
    { name: 'Volvo', lastname: 'XC90', age: '2021' },
    { name: 'Chevrolet', lastname: 'Corvette Z06', age: '2024' },
    { name: 'Nissan', lastname: 'Z', age: '2023' },
    { name: 'Land Rover', lastname: 'Defender', age: '2022' },
];

const ChalScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>List of cars</Text>
            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.name}
                data={cars}
                renderItem={({ item }) => {
                    return <Text style={styles.listItem}>{item.name} {item.lastname} {item.age}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black', 
        paddingTop: 50,
        paddingLeft: 20
    },
    textStyle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    listItem: {
        textAlign: 'center',
        color: 'white', 
        fontSize: 18,
        marginRight: 20,
        borderColor: 'gray',
        borderWidth: 10,
        borderPadding: 10,
        paddingBottom: 10,
        paddingTop: 10,
       }
});

export default ChalScreen;