import React from "react";
import {Text,View,StyleSheet,FlatList} from "react-native";
const students = [
    {name: 'Rron',lastname: 'Nuredini', age:'15'},
    {name: 'Drin',lastname: 'Ziberi', age:'15'},
    {name: 'Rron',lastname: 'nuredini', age:'15'}
];
const ListScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>List of students</Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(student) => student.name}
                data={students}
                renderItem={({item}) => {
                    return <Text>{item.name} {item.lastname} {item.age}</Text>
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        color: 'red',}
});

export default ListScreen;